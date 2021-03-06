import React, { useState } from "react";

const AddContact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" placeholder="contact name" name="Name" />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" placeholder="contact phone" name="Phone" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="contact email" name="Email" />
          </div>
          <button type="submit">Save contact</button>
          <button onClick={() => setShowForm(false)}>Discard form</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add new contact</button>
      )}
    </React.Fragment>
  );
};

export default AddContact;
