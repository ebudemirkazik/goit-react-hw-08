import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import styles from './ContactForm.module.css';



const schema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().matches(/^[0-9-]+$/).min(3).max(20).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const exists = contacts.some(
      c => c.name.toLowerCase() === values.name.toLowerCase()
    );
    if (exists) {
      alert('This name is already in contacts');
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
