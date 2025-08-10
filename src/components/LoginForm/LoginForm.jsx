// src/components/LoginForm/LoginForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik initialValues={{ email:"", password:"" }} validationSchema={schema} onSubmit={handleSubmit}>
      <Form>
        <label>Email <Field name="email" type="email" /></label>
        <ErrorMessage name="email" component="div" />
        <label>Password <Field name="password" type="password" /></label>
        <ErrorMessage name="password" component="div" />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}