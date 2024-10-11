import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { selectContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const nameFilter = useSelector(selectNameFilter);
  const filterContactName = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(nameFilter.toLowerCase().trim())
  );
  return (
    <div>
      <ul className={s.contactList}>
        {filterContactName.map((item) => {
          return (
            <li key={item.id} className={s.contactItem}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
