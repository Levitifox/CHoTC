# CHoTC (Clear History on Tab Close)

A lightweight Chrome extension that keeps your browsing history and form-data suggestions always clean. On each tab or window close, it automatically wipes your URL history and form-autocomplete entries—no more unwanted Omnibox suggestions.

## Features

- Clears browsing history (`chrome.history.deleteAll()`)  
- Removes form-data suggestions (`browsingData.remove({ history, formData })`)  
- Toggle on/off from the popup at any time  
- Zero console output or clutter—just pure functionality  

## Installation

1. Clone or download this repo.  
2. Open `chrome://extensions` in your browser.  
3. Enable **Developer mode**.  
4. Click **Load unpacked** and select the extension folder.  
5. Pin the CHoTC icon and click it to open the popup.  

## Usage

- Click the toggle checkbox in the popup to **enable** or **disable** auto-cleaning.  
- When enabled, every tab or window close triggers a history/form-data wipe.  

## Permissions

- `history` — delete browsing history  
- `browsingData` — remove form-data suggestions  
- `tabs`, `windows` — detect when tabs/windows are closed  
- `storage` — remember your enable/disable preference  