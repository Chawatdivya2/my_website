// ===== Scroll to Section =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Dark / Light Mode Toggle =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? '☀ Light Mode'
        : '🌙 Dark Mode';
});

// ===== Collapsible Sections =====
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// ===== Search Filter =====
const searchInput = document.getElementById('search');
searchInput?.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.topic').forEach(topic => {
        topic.style.display = topic.textContent.toLowerCase().includes(query)
            ? ''
            : 'none';
    });
});
