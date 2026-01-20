'use strict';

const form = document.getElementById('form');
const result = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const toggleBtn = document.getElementById('togglePassword');
const strengthEl = document.getElementById('strength');

const fields = {
    email: form.email,
    password: form.password,
    confirm: form.confirm,
    age: form.age,
    city: form.city,
    terms: form.terms
};

const validators = {
    email: v =>
        !v ? 'Обовʼязково' :
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Невірний email' : '',

    password: v =>
        v.length < 8 ? 'Мін 8 символів' :
            !/\d/.test(v) ? 'Має містити цифру' :
                !/[a-zA-Z]/.test(v) ? 'Має містити літеру' : '',

    confirm: v =>
        v !== fields.password.value ? 'Паролі не збігаються' : '',

    age: v =>
        !v ? 'Обовʼязково' :
            v < 16 || v > 120 ? 'Вік 16–120' : '',

    city: v => !v ? 'Оберіть місто' : '',

    terms: v => !v ? 'Потрібна згода' : ''
};

function showError(name, message) {
    const field = fields[name].closest('.field');
    field.classList.toggle('invalid', !!message);
    field.querySelector('.error').textContent = message;
}

function validateField(name) {
    const value = name === 'terms'
        ? fields[name].checked
        : fields[name].value.trim();

    const error = validators[name](value);
    showError(name, error);
    return !error;
}

function validateForm() {
    let firstInvalid = null;

    Object.keys(fields).forEach(name => {
        const valid = validateField(name);
        if (!valid && !firstInvalid) {
            firstInvalid = fields[name];
        }
    });

    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
}

form.addEventListener('input', e => {
    if (fields[e.target.name]) {
        validateField(e.target.name);
        if (e.target.name === 'password') updateStrength();
        saveToStorage();
    }
});

form.addEventListener('change', saveToStorage);

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
        email: fields.email.value,
        password: fields.password.value,
        age: Number(fields.age.value),
        city: fields.city.value,
        terms: fields.terms.checked
    };

    result.textContent = JSON.stringify(data, null, 2);
});

function updateStrength() {
    const v = fields.password.value;
    let strength = 'weak';

    if (v.length >= 10 && /\d/.test(v) && /[A-Z]/.test(v)) {
        strength = 'strong';
    } else if (v.length >= 8) {
        strength = 'medium';
    }

    strengthEl.textContent = `Strength: ${strength}`;
}

toggleBtn.addEventListener('click', () => {
    const type = fields.password.type === 'password' ? 'text' : 'password';
    fields.password.type = fields.confirm.type = type;
});

function saveToStorage() {
    const data = {
        email: fields.email.value,
        password: fields.password.value,
        confirm: fields.confirm.value,
        age: fields.age.value,
        city: fields.city.value,
        terms: fields.terms.checked
    };
    localStorage.setItem('form', JSON.stringify(data));
}

function restoreFromStorage() {
    const data = JSON.parse(localStorage.getItem('form'));
    if (!data) return;

    Object.keys(data).forEach(k => {
        if (fields[k]) {
            if (fields[k].type === 'checkbox') {
                fields[k].checked = data[k];
            } else {
                fields[k].value = data[k];
            }
            validateField(k);
        }
    });
    updateStrength();
}

clearBtn.addEventListener('click', () => {
    form.reset();
    result.textContent = '';
    strengthEl.textContent = '';
    localStorage.removeItem('form');

    document.querySelectorAll('.field').forEach(f => {
        f.classList.remove('invalid');
        f.querySelector('.error').textContent = '';
    });
});

restoreFromStorage();
