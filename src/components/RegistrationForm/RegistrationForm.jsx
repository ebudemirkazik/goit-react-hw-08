// src/components/RegistrationForm/RegistrationForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as registerUser } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const schema = Yup.object({
  name: Yup.string().min(2).max(50).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // sadece form değerlerini gönderiyoruz (non-serializable yok)
      await dispatch(registerUser(values)).unwrap();
      resetForm();
      navigate("/contacts"); // başarıda rehbere git
    } catch (e) {
      // burada toast vs. koyabilirsin
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>

          <label className={styles.label}>
            Email
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </label>

          <label className={styles.label}>
            Password
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </label>

          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Creating…" : "Create account"}
          </button>
        </Form>
      )}
    </Formik>
  );
}