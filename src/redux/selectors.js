// import { useSelector } from 'react-redux';

// const contacts = useSelector(state => state.contacts);
// export const contactsArr = contacts[0].data;

// export const filter = useSelector(state => state.filter);

export const contacts = state => state.contacts;

export const filter = state => state.filter;
