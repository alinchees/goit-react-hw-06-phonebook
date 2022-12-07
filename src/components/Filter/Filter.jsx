import css from './Filter.module.css';
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
        onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

export default Filter;
