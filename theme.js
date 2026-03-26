const body = document.body;
const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyTheme = theme => {
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
    toggle.classList.remove('light', 'dark');
    toggle.classList.add(theme);
    toggle.textContent = '';
    localStorage.setItem('theme', theme);
};

applyTheme(currentTheme);

toggle.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
});