// src/components/ContactList/ContactList.jsx
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>{name} — {number}</li>
      ))}
    </ul>
  );
}