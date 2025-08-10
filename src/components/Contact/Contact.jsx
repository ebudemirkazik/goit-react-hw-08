import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <p>👤 {name}</p>
      <p>📞 {number}</p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}