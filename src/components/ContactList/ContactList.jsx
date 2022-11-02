import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name: contactName, number }) => (
        <ContactListItem key={id} id={id} contactName={contactName} number={number} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTipes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};


export default ContactList;