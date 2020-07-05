chrome.storage.sync.set({'theme': 'dark'}, function() {
    console.log('Value is set to ' + value);
});

document.body.classList.add('dark')
