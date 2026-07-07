function initializeThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-icon');
    
    const targets = [document.documentElement, document.body];

    if (!toggleBtn || !toggleIcon) {
        console.log("Theme elements not found yet, retrying...");
        return;
    }


    function applyTheme(isDark) {
        targets.forEach(el => {
            if (isDark) {
                el.classList.add('dark');
                el.setAttribute('data-theme', 'dark'); 
            } else {
                el.classList.remove('dark');
                el.removeAttribute('data-theme');
            }
        });
        toggleIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }


    const hasDarkClass = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
    applyTheme(hasDarkClass);


    toggleBtn.onclick = function() {
        const isNowDark = !document.documentElement.classList.contains('dark');
        applyTheme(isNowDark);
        localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
    };
}


window.addEventListener('load', initializeThemeToggle);
document.addEventListener('DOMContentLoaded', initializeThemeToggle);
setTimeout(initializeThemeToggle, 500); // Fail-safe microsecond execution backup
