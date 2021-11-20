import React, { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import Page from "./Page/Page";

function App() {
  let [todosh, setTodosh] = useState([]);
  function change(id) {
    const newTodosh = todosh.map((item) => {
      if (item.id === id) {
        item.st = !item.st;
      }
      return item;
    });
    setTodosh(newTodosh);
  }
  return (
    <>
      <ContactList todosh={todosh} change={change} />
    </>
  );
}

export default App;
