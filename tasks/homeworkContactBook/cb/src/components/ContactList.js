import React from "react";
import AddContact from "./AddContact";
const contacts = [
  {
    name: "Vennila",
    phone: "+996559113371",
    email: "venil.par@gmail.com",
  },
  {
    name: "NoVennila",
    phone: "+222559113371",
    email: "novenil.par@gmail.com",
  },
];

const Contact = ({ name, email, phone }) => {
  return (
    <li>
      <h3> {name}</h3>
      <div>
        <strong>{email}</strong>
      </div>
      <strong>{phone}</strong>
      <button>Edit </button>
      <button>Remove </button>
    </li>
  );
};
const ContactList = () => {
  return (
    <section>
      <AddContact />
      <ul>
        {contacts.map((contact) => {
          return <Contact key={contact.name} {...contact} />;
        })}
      </ul>
    </section>
  );
};

export default ContactList;
