
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import css from "./AppBar.module.css";
import {Filter} from '../Filter/Filter'
import { ContactsList } from "components/ContactsList/ContactsList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import {getFilterContacts, getFilter} from '../../redux/selectors';
import { useEffect} from "react";
import { fetchContacts, addContact, removeContact } from "redux/operations";
import {filter} from '../../redux/filterSlice';

export const AppBar = () => {
  const contacts = useSelector(getFilterContacts);
  
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch]);

  const onAddContact =(payload) => {
    dispatch(addContact(payload));
  }
  const onRemoveContact = (payload) => {
    dispatch(removeContact(payload));
  }
  const onFilter = ({target}) => {
    dispatch(filter(target.value));
}

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Phonebook</h2>
     <ContactsForm onSubmit={onAddContact}/>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Contacts</h2>
      <Filter onFilter={onFilter} value={value}/>  
      <ContactsList contacts={contacts} removeContact={onRemoveContact}/>  
      <ToastContainer autoClose={3000}  />   
      </section>
    </header>
  );
};