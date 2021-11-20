import React, { useState } from "react";
import "./ContactList.css";

const ContactList = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => props.addTask(value)}>Add</button>
      </>
    </>
  );
};

export default ContactList;
