// script.js
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle l'élément courant
        item.classList.toggle('active');
        // Mettre à jour le texte du toggle
        const toggle = item.querySelector('.faq-toggle');
        if (item.classList.contains('active')) {
            toggle.textContent = '-';
        } else {
            toggle.textContent = '+';
        }
    });
});
