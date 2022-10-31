import React, { Component } from 'react'

export default class ContactForm extends Component {
  state = { name: '', number: '' }
  
  handleOnChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.clearForm();
  }

  clearForm = () => {
    this.setState({name: '', number: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleOnChange}
              />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleOnChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
    )
  }
}