document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const loadingScreen = document.getElementById('loadingScreen');

    let timeoutId;

    function showLoadingScreen() {
        loadingScreen.classList.add('visible');
    }

    function hideLoadingScreen() {
        loadingScreen.classList.remove('visible');
    }

    function handleLinkClick(event) {
        event.preventDefault();
        const href = this.href;
        showLoadingScreen();
        timeoutId = setTimeout(function() {
            window.location.href = href;
        }, 8000);
    }

    links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    window.addEventListener('load', function() {
        hideLoadingScreen();
        clearTimeout(timeoutId);
    });
});