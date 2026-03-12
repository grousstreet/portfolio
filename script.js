document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Загрузка сохранённой темы
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        toggle.textContent = '☀️';
    }

    // Переключение темы
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggle.textContent = isDark ? '☀️' : '🌙';
    });

    // Обработка формы (только на contact.html)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Сообщение отправлено! (симуляция)');
            form.reset();
        });
    }
});
