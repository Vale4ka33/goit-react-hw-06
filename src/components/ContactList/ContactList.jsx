import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map((contactItem) => {
        return (
          <li key={contactItem.id} className={css.contactItems}>
            <Contact
              name={contactItem.name}
              number={contactItem.number}
              id={contactItem.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
