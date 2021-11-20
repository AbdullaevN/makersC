import { Button, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { mainContext } from "../contexts/MainContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const AddPage = () => {
  const { addCountry } = useContext(mainContext);
  const history = useHistory();
  const [newCountry, setNewCountry] = useState({
    name: "",
    capital: "",
    population: 0,
  });

  function handleChange(e) {
    let country = {
      ...newCountry,
      [e.target.name]: e.target.value,
    };
    setNewCountry(country);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addCountry(newCountry);
    history.push("/");
  }

  return (
    <div>
      <Link to="/add">
        <Button variant="success">Добавить страну</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Country Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Country Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Capital</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="capital"
            type="text"
            placeholder="Enter Capital Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Country population</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="population"
            type="number"
            placeholder="Enter Population "
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default AddPage;
