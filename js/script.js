'use strict';
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.querySelector('.list');

/* ADD */
addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text + ' ';

    const btn = document.createElement('button');
    btn.textContent = '✖';
    btn.className = 'remove';

    li.append(btn);
    list.append(li);

    input.value = '';
});

list.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('remove')) {
        target.closest('li').remove();
        return;
    }

    const li = target.closest('li');
    if (li && list.contains(li)) {
        li.classList.toggle('selected');
    }
});
