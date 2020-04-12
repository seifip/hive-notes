import psl from 'psl'
import axios from 'axios'

global.browser = require('webextension-polyfill')

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    const url = new URL(tab.url)
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
          chrome.browserAction.setIcon({
            path: '/icons/48.png'
          })
        } else if (res.data.records.find(el => el.fields.Priority === '1')) {
          chrome.browserAction.setIcon({
            path: '/icons/48-warning.png'
          })
        } else {
          chrome.browserAction.setIcon({
            path: '/icons/48-on.png'
          })
        }
        this.loading = false
      }).catch(function (error) {
        console.log(error)
      })
  })
})
