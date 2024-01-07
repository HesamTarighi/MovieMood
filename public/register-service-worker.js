if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then(() => console.log('Service worker registered!'))
        .catch(() => console.error('--Service worker not registered!--'))
}
