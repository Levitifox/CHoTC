chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    chrome.browsingData.remove({
        "since": 0
    }, {
        "history": true,
    }, function() {
        console.log("Browsing data cleared.");
    });
});
