import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div className={s.containerList}>
        <p className={s.contactInfo}>
          <FaUser className={s.icon} />
          {name}
        </p>

        <a className={s.contactInfo} href={number}>
          <FaPhoneAlt className={s.icon} />
          {number}
        </a>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
