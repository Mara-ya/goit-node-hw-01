const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('db/contacts.json');

function listContacts() {
    fs.readFile(contactsPath)
    .then(data => console.table(JSON.parse(data.toString())))
    .catch(err => console.log(err.message));
}

function getContactById(contactId) {
    fs.readFile(contactsPath)
    .then(data => {
        const contacts = JSON.parse(data.toString());
        const contactById = contacts.filter(contact => contact.id == contactId);
        console.log(contactById);
    })
    .catch(err => console.log(err.message));
}

function removeContact(contactId) {
    fs.readFile(contactsPath)
    .then(data => {
        const contacts = JSON.parse(data.toString());
        const remainingContacts = contacts.filter(contact => contact.id != contactId);

        fs.writeFile(contactsPath, JSON.stringify(remainingContacts))
        .then((err) => {
            if (err) throw err;
            console.log('The file has been saved!')
        })
        .catch(err => console.log(err.message));
    })
    .catch(err => console.log(err.message));
}

function addContact(name, email, phone) {
    fs.readFile(contactsPath)
    .then(data => {
        const contacts = JSON.parse(data.toString());
        let duplicate = false;

        contacts.map(({email: existingEmail, phone: existingPhone}) => {
            if (existingEmail === email || existingPhone === phone){
                duplicate = true;
            }
        })

        if (!duplicate) {
            const newId = String(Number(contacts[contacts.length - 1].id) + 1);
            const newContact = {
                id: newId,
                name,
                email,
                phone: String(phone),
            };
            const newContactsList = [...contacts, newContact];

            fs.writeFile(contactsPath, JSON.stringify(newContactsList))
            .then((err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            })
            .catch(err => console.log(err.message));
        } else {
            console.log(`Contact is already in the list of contacts`);
        }
    })
    .catch(err => console.log(err.message));
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};