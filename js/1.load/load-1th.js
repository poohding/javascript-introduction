function convertMillisecondToSecond(ms) {
    return (ms / 1000) % 60;
}

try {
    document.getElementById('log1').innerHTML = 'ready';
} catch (e) {
    console.log(e); // TypeError: Cannot set property 'innerHTML' of null
}

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

        document.getElementById('log2').innerHTML = convertMillisecondToSecond(loadTime) + ' s';
    }, 0);
});

window.addEventListener('load', function() {
    setTimeout(function() {
        var loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

        document.getElementById('log3').innerHTML = convertMillisecondToSecond(loadTime) + ' s';
    }, 0);
});
