import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { mainContext } from "../contexts/MainContext";

const EditPage = () => {
  const { getCountryToEdit, countryToEdit, saveEditedCountry, deleteCountry } =
    useContext(mainContext);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getCountryToEdit(params.id);
  }, []);
  const [editCountry, setEditCountry] = useState(countryToEdit);

  useEffect(() => {
    setEditCountry(countryToEdit);
  }, [countryToEdit]);
  function handleChange(e) {
    let country = {
      ...editCountry,
      [e.target.name]: e.target.value,
    };
    setEditCountry(country);
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveEditedCountry(editCountry);
    history.push("/");
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteHandler(e) {
    e.preventDefault();
    deleteCountry(params.id);
    history.push("/");
  }
  return (
    <div>
      <Link to="/">
        <Button variant="success">На главную</Button>
      </Link>
      {editCountry ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Country name</Form.Label>
            <Form.Control
              value={editCountry.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter country name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Country capital</Form.Label>
            <Form.Control
              value={editCountry.capital}
              onChange={handleChange}
              name="capital"
              type="text"
              placeholder="Enter country capital"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Country population</Form.Label>
            <Form.Control
              value={editCountry.population}
              onChange={handleChange}
              name="population"
              type="number"
              placeholder="Enter country population"
            />
          </Form.Group>
          <Button type="submit">Save changes</Button>
          <Button variant="danger" onClick={handleShow}>
            Delete
          </Button>
        </Form>
      ) : (
        <h2>Loading...</h2>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditPage;
