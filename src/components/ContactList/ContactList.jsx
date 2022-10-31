import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name: contactName, number }) => (
        <ContactListItem key={id} id={id} contactName={contactName} number={number} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;