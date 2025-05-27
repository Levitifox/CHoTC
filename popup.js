const toggle = document.getElementById('toggle');
chrome.storage.sync.get({ enabled: true }, prefs => {
    toggle.checked = prefs.enabled;
});
toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ enabled: toggle.checked });
});