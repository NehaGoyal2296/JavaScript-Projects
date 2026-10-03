'use strict';
// Progressive enhancement: navigation and project links work without JavaScript.
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
menu.hidden = false;
function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
    }
});
const filters = document.querySelector('.project-filters');
const cards = [...document.querySelectorAll('.project-card')];
filters.hidden = false;
filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => {
        item.setAttribute('aria-pressed', String(item === button));
    });
    cards.forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#project-count').textContent = `${count} projects shown`;
});
// No network request or storage: the contact form is a validation demo only.
const form = document.querySelector('.contact-form');
const status = document.querySelector('#form-status');
const fields = ['name', 'email', 'message'].map(id => document.getElementById(id));
form.querySelector('button').disabled = false;
function validate(field) {
    let error = '';
    const value = field.value.trim();
    if (!value) error = `Please enter your ${field.id}.`;
    else if (field.id === 'email' && field.validity.typeMismatch) error = 'Please enter a valid email address.';
    else if (field.id === 'message' && value.length < 10) error = 'Please write at least 10 characters.';
    else if (field.validity.tooLong) error = 'Please shorten this entry.';
    document.getElementById(`${field.id}-error`).textContent = error;
    field.setAttribute('aria-invalid', String(Boolean(error)));
    return !error;
}
fields.forEach(field => field.addEventListener('input', () => {
    status.textContent = '';
    if (field.hasAttribute('aria-invalid')) validate(field);
}));
form.addEventListener('submit', event => {
    event.preventDefault();
    const results = fields.map(validate);
    const invalid = results.indexOf(false);
    if (invalid !== -1) {
        status.textContent = 'Please fix the highlighted fields. Your message has not been sent.';
        fields[invalid].focus();
        return;
    }
    status.textContent = 'Your entries are valid. This is a practice form: your message has not been sent or saved. Contact me on GitHub.';
    status.focus();
});
