import { Button } from "components/Button/Button";
import { nanoid } from "@reduxjs/toolkit";
import css from "./ContactsForm.module.css";
import { MdContactPhone } from "react-icons/md";
import useForm from "../../shared/hooks/useForm";
import initialState from "./initialState";

const inputNameId = nanoid();
const inputNumberId = nanoid();

export const ContactsForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, number } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.contactLabel} htmlFor={inputNameId}>
        Name
      </label>
      <input
        value={name}
        onChange={handleChange}
        className={css.field}
        type="text"
        name="name"
        id={inputNameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter name..."
      />
      <label className={css.contactLabel} htmlFor={inputNumberId}>
        Number
      </label>
      <input
        value={number}
        onChange={handleChange}
        className={css.field}
        type="tel"
        name="number"
        id={inputNumberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <Button type="submit">
        <MdContactPhone style={{ marginRight: 5 }} />
        Add Contact
      </Button>
    </form>
  );
};
