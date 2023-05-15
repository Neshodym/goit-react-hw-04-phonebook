import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    phone: '',
  };
  nameId = nanoid();
  phoneId = nanoid();
  
  handleChangeInput = e => {
    // this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitProps(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', phone: '' });
  };
 
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId} className={css.label}>
          Name
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChangeInput}
            id={this.nameId}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.formInput}
          ></input>
        </label>
        <label htmlFor={this.photoId} className={css.label}>
          Phone
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChangeInput}
            id={this.phoneId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit" className={css.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = { onSubmitProps: PropTypes.func.isRequired };
