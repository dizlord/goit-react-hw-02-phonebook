import React from 'react';

const ContactListItem = ({ id, contactName, number, deleteContact }) => {
  return (
    <li>
      {contactName}: {number}
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
