import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleAddName = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const includesName = this.state.contacts.findIndex(({name}) => name.toLowerCase() === normalizedName);
    if (includesName !== -1) {
      window.alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {id: shortid.generate(), name, number};
    this.setState(prevState => ({ contacts: [newContact, ...prevState.contacts] }));
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value});
  }

  getVisibleContacts =  () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = (idContact) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter( contact => contact.id !== idContact)}))
  }

render() {
  const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        
        <ContactForm onSubmit={ this.handleAddName } />

        <h2>Contacts</h2>
        <Filter value={ this.state.filter } onChange={this.changeFilter} />
        <ContactList contacts={ visibleContacts } deleteContact={this.deleteContact} />
      </div>
    )
  }
}
