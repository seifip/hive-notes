import psl from 'psl'
import axios from 'axios'

global.browser = require('webextension-polyfill')

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.openOptionsPage()
  }
})

function updateIcon (icon) {
  chrome.browserAction.setIcon({
    path: `/icons/${icon}.png`
  })
}

function fetchNoteCount (tabUrl) {
  chrome.storage.sync.get(['airtableCredentials'], (res) => {
    if (res.airtableCredentials) {
      const url = new URL(tabUrl)
      const domain = psl.parse(url.hostname).domain

      axios.get(
        'https://api.airtable.com/v0/' + res.airtableCredentials.baseId + '/Notes',
        {
          params: {
            view: 'Extension',
            fields: ['Priority'],
            filterByFormula: `Domain = "${domain}"`
          },
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + res.airtableCredentials.apiKey
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
