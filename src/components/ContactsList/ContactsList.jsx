import  PropTypes  from 'prop-types';

import css from './ContactsList.module.css';

import { ContactListItem } from '../ContactListItem/ContactListItem';


export const ContactsList = ({contacts, removeContact}) => {
   
   
    return (
        <ul className={css.list}>
        {contacts.map(contact => (
           
          <li className={css.listItem} key={contact.id}>
            
            <ContactListItem contact={contact} removeContact={removeContact} />
          </li>
        ))}
      </ul>
    )
   
}


ContactsList.defaultProps ={
    contacts: []
}

ContactsList.propTypes ={
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    }))
}