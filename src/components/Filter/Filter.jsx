import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.Filter}>
      Filter contacts by name
      <input
        className={css.FilterInput}
        type="text"
        // value={value}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
