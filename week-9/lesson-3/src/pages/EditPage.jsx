import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { adminContext } from "../contexts/AdminContext";

const EditPage = () => {
  const schema = yup.object({
    name: yup.string().min(3).max(30).required("required"),
    description: yup.string().min(3).max(30).required("required"),
    brand: yup.string().required("required"),
    image: yup.string().required("required"),
    price: yup.number().min(3, "min 3").required("Required"),
    color: yup.string().required("Required"),
    modal: yup
      .string()
      .min(1, "min 1")
      .max(255, "max 255")
      .required("Required"),
  });

  const { getPhoneToEdit, phonesEdit, saveGetPhoneToEdit } =
    useContext(adminContext);
  const params = useParams();
  useEffect(() => {
    getPhoneToEdit(params.id);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="edit-page">
      <h2>Add Phone</h2>
      <Link to="/admin">
        <h2>NAZAD</h2>
      </Link>
      {phonesEdit ? (
        <Formik
          validationSchema={schema}
          onSubmit={(editedPhone) => {
            saveGetPhoneToEdit(editedPhone);
            navigate("/admin");
          }}
          initialValues={phonesEdit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                onChange={handleChange}
                value={values.name}
                error={!!errors.name && touched.name}
                helperText={touched.name ? errors.name : ""}
                label="Name device"
                type="text"
                variant="standard"
              />
              <TextField
                name="description"
                onChange={handleChange}
                value={values.description}
                error={!!errors.description && touched.description}
                helperText={touched.description ? errors.description : ""}
                label="description device"
                type="text"
                variant="standard"
              />
              <TextField
                name="brand"
                onChange={handleChange}
                value={values.brand}
                error={!!errors.brand && touched.brand}
                helperText={touched.brand ? errors.brand : ""}
                label="brand device"
                type="text"
                variant="standard"
              />
              <TextField
                name="image"
                onChange={handleChange}
                value={values.image}
                error={!!errors.image && touched.image}
                helperText={touched.image ? errors.image : ""}
                label="image device"
                type="text"
                variant="standard"
              />
              <TextField
                name="price"
                onChange={handleChange}
                value={values.price}
                error={!!errors.price && touched.price}
                helperText={touched.price ? errors.price : ""}
                label="price device"
                type="number"
                variant="standard"
              />
              <TextField
                name="color"
                onChange={handleChange}
                value={values.color}
                error={!!errors.color && touched.color}
                helperText={touched.color ? errors.color : ""}
                label="color device"
                type="text"
                variant="standard"
              />
              <TextField
                name="modal"
                onChange={handleChange}
                value={values.modal}
                error={!!errors.modal && touched.modal}
                helperText={touched.modal ? errors.modal : ""}
                label="modal device"
                type="text"
                variant="standard"
              />

              <Button variant="contained" color="primary" type="submit">
                Save changes
              </Button>
            </form>
          )}
        </Formik>
      ) : (
        <h2> Loading ... </h2>
      )}
    </div>
  );
};

export default EditPage;
