import psl from 'psl'
import axios from 'axios'

global.browser = require('webextension-polyfill')

function updateIcon (icon) {
  chrome.browserAction.setIcon({
    path: `/icons/${icon}.png`
  })
}

function fetchNoteCount (tabUrl) {
  const url = new URL(tabUrl)
  const domain = psl.parse(url.hostname).domain

  axios.get(
    'https://api.airtable.com/v0/' + process.env.VUE_APP_AIRTABLE_BASE + '/Notes',
    {
      params: {
        view: 'Extension',
        fields: ['Priority'],
        filterByFormula: `Domain = "${domain}"`
      },
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.VUE_APP_AIRTABLE_API_KEY
      }
    }
  )
    .then(res => {
      if (res.data.records.length === 0) {
        updateIcon('48')
      } else if (res.data.records.find(el => el.fields.Priority === '1')) {
        updateIcon('48-warning')
      } else {
        updateIcon('48-on')
      }
      this.loading = false
    }).catch(function (error) {
      console.log(error)
    })
}

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if (tab.url) {
      fetchNoteCount(tab.url)
    } else {
      updateIcon('48')
    }
  })
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    fetchNoteCount(changeInfo.url)
  }
})
