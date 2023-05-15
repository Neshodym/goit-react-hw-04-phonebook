import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => {
  // console.log(filter);
  // console.log(onChangeFilter);
  return (
    <>
      <label className={css.filterLabel}>
        <span className={css.title}>Find contact by name</span>
        <input 
          type="text"
          value={filter}
          onChange={onChangeFilter}
          className={css.filterInput}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
