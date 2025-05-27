let attached = false;

chrome.storage.sync.get({ enabled: true }, prefs => {
    if (prefs.enabled) attach();
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && 'enabled' in changes) {
        changes.enabled.newValue ? attach() : detach();
    }
});

function clearHistory() {
    chrome.history.deleteAll();
    chrome.browsingData.remove({ since: 0 }, { history: true, formData: true });
}

function attach() {
    if (attached) return;
    chrome.tabs.onRemoved.addListener(clearHistory);
    chrome.windows.onRemoved.addListener(clearHistory);
    attached = true;
}

function detach() {
    if (!attached) return;
    chrome.tabs.onRemoved.removeListener(clearHistory);
    chrome.windows.onRemoved.removeListener(clearHistory);
    attached = false;
}