'use strict';

const user = {
    name: 'Vova',
    age: 20,
}

let { name } = user; // Vova
let { age: year } = user; // 20


// IFFE
// Global Scope
(function () {
    // Just for example
    const validationRegExps = {
        'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
        'phone': /^\+[1-9]\d{7,14}$/,
        'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u
    }

    const errorMessages = {
        'fullName': 'Full Name Required',
        'phone': 'Phone Number Required',
        'address': 'Address Required',
    }

    // UI Handling

    const uiContactsListHandler = () => {
        const contactsAlert = document.querySelector('[data-contacts-alert]');
        const contactsList = document.querySelector('[data-contacts-list]');

        const createItemTemplate = ({ id, fullName, phone, address }) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
            li.dataset.contactId = id;
            li.dataset.contactName = fullName;
            li.innerHTML = `
                <span>${fullName} | ${phone} | ${address}</span>
                <button type="button" class="btn btn-sm btn-outline-danger" data-remove-contact>
                    Delete
                </button>
            `;

            return li;
        }

        const addElement = (data) => {
            const element = createItemTemplate(data)
            contactsList.prepend(element)
            contactsList.classList.remove('d-none');
            contactsAlert.classList.add('d-none');
        }

        const removeElement = (id) => {
            const element = contactsList.querySelector(`[data-contact-id="${id}"]`);
            if (!element) return null;
            element.remove();
            if (!contactsList.children.length) {
                contactsList.classList.add('d-none');
                contactsAlert.classList.remove('d-none');
            }
        }

        return {
            addElement,
            removeElement,
        }

    }
    const listHandler = uiContactsListHandler()


    // General Variables
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
    const addContactModalSelector = '#addContactModal';
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: 'static'
    });
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');



    // State management
    const contactsManagement = () => {
        const contacts = [];

        const getContacts = () => {
            return structuredClone(contacts);
        }

        const addContact = (data) => {
            const id = (typeof crypto !== 'undefined' && crypto.randomUUID)
                ? crypto.randomUUID()
                : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
            const contact = { id, ...data };
            contacts.push(contact);
            return contact;
        }

        const removeContact = (id) => {
            const index = contacts.findIndex(item => item.id === id);
            if (index === -1) return null;
            return contacts.splice(index, 1)[0];
        }


        return {
            getContacts,
            addContact,
            removeContact
        }
    }
    const contactService = contactsManagement();



    // Delete confirmation modal
    const deleteContactModal = new bootstrap.Modal('#deleteContactModal');
    const deleteModalElement = document.querySelector('#deleteContactModal');
    const deleteModalName = deleteModalElement.querySelector('[data-delete-contact-name]');
    let contactIdToDelete = null;
    let contactNameToDelete = '';

    const clearPendingDelete = () => {
        contactIdToDelete = null;
        contactNameToDelete = '';
        deleteModalName.textContent = '';
    }

    deleteModalElement.addEventListener('hidden.bs.modal', () => {
        clearPendingDelete();
    })

    // Events
    modalTrigger.addEventListener('click', () => {
        addContactModal.show()
    })

    addContactModal._element.querySelector(`form#add-contact-form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();
            let formValidated = true;
            const inputs = evt.target.querySelectorAll('input, textarea');
            const data = Array.from(inputs).reduce((acc, input) => {
                const { name, value, parentElement: wrapper } = input;

                if (validationRegExps[name].test(value)) {
                    acc[name] = value
                } else {
                    const errBlock = document.createElement('div');
                    errBlock.innerHTML = errorMessages[name];
                    errBlock.classList.add('text-danger', 'error-validation');
                    wrapper.append(errBlock)
                    formValidated = false;
                }
                return acc;
            }, {})

            if (!formValidated) return null

            const savedContact = contactService.addContact(data);
            listHandler.addElement(savedContact)

            addContactModal.hide();
            toastAdded.show()
            evt.target.reset();
            document.querySelectorAll('.error-validation').forEach(item => item.remove())

        })

    document.querySelector('[data-contacts-list]')
        .addEventListener('click', evt => {
            const deleteButton = evt.target.closest('[data-remove-contact]');
            if (!deleteButton) return null;
            const item = deleteButton.closest('[data-contact-id]');
            if (!item) return null;
            contactIdToDelete = item.dataset.contactId;
            contactNameToDelete = item.dataset.contactName || '';
            deleteModalName.textContent = contactNameToDelete;
            deleteContactModal.show();
        })

    deleteModalElement.querySelector('[data-confirm-delete]')
        .addEventListener('click', () => {
            if (!contactIdToDelete) return null;
            const removed = contactService.removeContact(contactIdToDelete);
            if (removed) {
                listHandler.removeElement(contactIdToDelete);
            }
            clearPendingDelete();
            deleteContactModal.hide();
        })

    deleteModalElement.querySelector('[data-cancel-delete]')
        .addEventListener('click', () => {
            clearPendingDelete();
            deleteContactModal.hide();
        })
})()
// Global Scope