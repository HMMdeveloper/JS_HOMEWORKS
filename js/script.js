'use strict';

const cardsContainer = document.querySelector('.cardsClass');

cardsContainer.addEventListener('click', function (event) {
    const button = event.target.closest('[data-read-more-btn]');
    if (!button) return;

    const card = button.closest('.card');

    card.classList.toggle('expanded');

    if (card.classList.contains('expanded')) {
        button.textContent = 'Hide';
    } else {
        button.textContent = 'Read more';
    }
});
