import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, contactName, number, deleteContact }) => {
  return (
    <li>
      {contactName}: {number}
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactListItem;
