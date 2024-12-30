document.getElementById('saveSettings').addEventListener('click', function() {
    const enableBlocking = document.getElementById('enableBlocking').checked;
    const keywords = document.getElementById('keywordsInput').value.split(',').map(keyword => keyword.trim());
    
    chrome.storage.sync.set({ enableBlocking, keywords }, function() {
        alert('Settings saved!');
    });
});
