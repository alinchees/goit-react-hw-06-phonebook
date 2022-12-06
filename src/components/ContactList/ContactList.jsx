import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contacts, filter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsSelector = useSelector(contacts);
  const contactsArr = contactsSelector[0].data;
  const filterSelector = useSelector(filter);
  const contactsToRender = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(filterSelector)
  );

  return (
    <>
      <ul className={css.List}>
        {contactsToRender &&
          contactsToRender.map(({ id, name, number }) => (
            <li className={css.ListItem} id={id} key={id}>
              {name}: {number}
              <button
                className={css.DeleteBtn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
