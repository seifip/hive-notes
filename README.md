![Hive Notes](readme/logo.png)

Hive is an internal company browser extension that lets your team attach tips and warnings to any web page.

Notes are stored in your own company Airtable, so you're always in control of your data.

# Screenshots

![Hive Notes Chrome Extension](readme/screenshot-extension.png)

![Hive Notes Airtable](readme/screenshot-airtable.png)

# Use cases

This extension was originally created for the buying team at [White Rabbit Express](https://www.whiterabbitexpress.com/), but it's invaluable for any group or organization repeatedly interacting with different websites.

# Use Hive with your team
1. Go to https://airtable.com/shr1dxKNQusW47dRP and click `Copy base` in the top-right corner.
2. Publish the zip in the [artifacts](artifacts) folder to the [Chrome Web Store as an **Unlisted** extension](https://support.google.com/chrome/a/answer/2714278?hl=en).
3. Invite team members to your Hive Airtable base, and send them your private link to the extension.

# Changelog
### 0.5.0
- Hive now asks for your Airtable API Key and Base ID during onboarding if they're not set in the .env file.

### 0.4.0
- Added Markdown support

### 0.3.0
- The icon now changes colours based on notes attached to the current page. Gray if there are no notes yet, teal if there are notes attached, and red if there's at least one note with a Warning (1) Priority.

![Hive icon - No notes](public/icons/48.png) ![Hive icon - Notes](public/icons/48-on.png) ![Hive icon - Warning note](public/icons/48-warning.png)

### 0.2.0
- You can now add, delete and edit notes from within the extension, rather than through an Airtable form.
