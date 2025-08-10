import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}