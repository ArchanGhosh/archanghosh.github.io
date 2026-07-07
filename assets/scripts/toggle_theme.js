/**
 * Dark Mode Orchestrator for Archan's Portfolio
 * State-preserving toggle supporting cross-page continuity.
 */

function initializeThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Safety check: if the button doesn't exist on this page, exit gracefully
    if (!toggleBtn || !toggleIcon) return;

    // Check localStorage preference or system preference fallback
    const darkStored = localStorage.getItem('theme') === 'dark';
    const systemDark = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Sync icon state with the current class
    if (htmlElement.classList.contains('dark')) {
        toggleIcon.className = 'fas fa-sun';
    } else {
        toggleIcon.className = 'fas fa-moon';
    }

    // Toggle event listener
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

// Ensure the DOM is fully constructed before binding events
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle);
} else {
    initializeThemeToggle();
}
