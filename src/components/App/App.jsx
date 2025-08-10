// src/components/App/App.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Contacts from "../../pages/Contacts/Contacts";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => { dispatch(refreshUser()); }, [dispatch]);

  if (isRefreshing) return <p>Refreshing user...</p>;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}