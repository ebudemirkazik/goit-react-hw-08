// src/pages/Contacts/Contacts.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // ← useSelector eklendi
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";

export default function Contacts() {
  const dispatch = useDispatch();

  // Store'daki ham veriyi göster (geçici)
  const items = useSelector((s) => s.contacts.items);
  console.log("Contacts page store items:", items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}