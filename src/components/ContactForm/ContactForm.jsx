import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import FormError from 'components/FromError';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export default class ContactForm extends Component {
  handleSubmit = ({ name, number }, { resetForm }) => {
    this.props.onSubmit({ name, number });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <div>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <FormError name="name"/>
            </div>
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <div>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <FormError name="number" />
            </div>
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
