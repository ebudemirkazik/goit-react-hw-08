import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const schema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, helpers) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate("/contacts");
    } catch (e) {
      // toast vs. ekleyebilirsin
      console.error(e);
    } finally {
      helpers.setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} validationSchema={schema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
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
            {isSubmitting ? "Logging in…" : "Log in"}
          </button>
        </Form>
      )}
    </Formik>
  );
}