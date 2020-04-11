![Hive Notes](readme/logo.png)

Hive is an internal company browser extension that lets your team attach tips and warnings to any web page.

Notes are stored in your own company Airtable, so you're always in control of your data.

# Screenshots

![Hive Notes Chrome Extension](readme/screenshot-extension.png)

![Hive Notes Airtable](readme/screenshot-airtable.png)

# Use cases

This extension was originally created for the buying team at [White Rabbit Express](https://www.whiterabbitexpress.com/), but it's invaluable for any group or organization repeatedly interacting with different websites.

# How to use
1. Go to https://airtable.com/shr1dxKNQusW47dRP and click `Copy base` in the top-right corner.
2. Clone this repository, copy `.env.example` in the root folder and rename it to `.env`
3. Update the variables in the `.env` file to your Airtable API and Base ID. ([Where do I find these?](https://help.grow.com/hc/en-us/articles/360015095834-Airtable))
4. `yarn build`
5. Publish the `.zip` file in the `artifacts` folder to the Chrome Web Store as an **Unlisted** extension.
6. Invite team members to your Hive Airtable base, and send them a link to your Unlisted extension in the Chrome Web Store.
