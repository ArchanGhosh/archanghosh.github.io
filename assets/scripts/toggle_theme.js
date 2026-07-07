

function initializeThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    if (!toggleBtn || !toggleIcon) return;

    const darkStored = localStorage.getItem('theme') === 'dark';
    const systemDark = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (htmlElement.classList.contains('dark')) {
        toggleIcon.className = 'fas fa-sun';
    } else {
        toggleIcon.className = 'fas fa-moon';
    }

    toggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            toggleIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            toggleIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle);
} else {
    initializeThemeToggle();
}
