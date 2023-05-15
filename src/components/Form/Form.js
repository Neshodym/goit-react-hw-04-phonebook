import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export const Form = ({ onSubmitProps }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    onSubmitProps({ name, phone });

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId} className={css.label}>
        Name
        <input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          id={nameId}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
        ></input>
      </label>
      <label htmlFor={phoneId} className={css.label}>
        Phone
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          id={phoneId}
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
};

Form.propTypes = {
  onSubmitProps: PropTypes.func.isRequired,
};