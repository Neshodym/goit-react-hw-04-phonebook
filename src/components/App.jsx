import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleSubmitForm = ({ name, phone }) => {
    if (contacts.some(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: nanoid(), name, phone };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Section title={'Phonebook'}>
      <Form onSubmitProps={handleSubmitForm} />
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <Contacts
        title={'Contacts'}
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Section>
  );
};
