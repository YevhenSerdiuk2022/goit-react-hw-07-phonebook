
import { Button } from "components/Button/Button";
import {MdDeleteForever} from 'react-icons/md';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, removeContact }) => {

  return (
    <div className={css.wrapper}>
   
      <p >{contact.name}: {contact.number}</p>
      <Button onClick={() =>removeContact(contact.id)} >
        <MdDeleteForever size={18} />
      </Button>
    </div>
  );
};
