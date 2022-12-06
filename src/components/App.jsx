import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.Phonebook}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
