import css from './Contacts.module.css';
import PropTypes from "prop-types";

export const Contacts = ({ title, contacts, onDeleteContact }) => {


  return (
    <>
      <h3 className={css.title}>{title}</h3>
      <ul>
        {contacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.contactBox}>
              <p>
                {name}: {phone}
              </p>
              <button onClick={() => onDeleteContact(id)} className={css.btn}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
Contacts.propTypes = {
  title:PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      }),
    ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};