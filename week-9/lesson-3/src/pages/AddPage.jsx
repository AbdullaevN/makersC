import { Button, TextField } from "@mui/material";
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { adminContext } from "../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const { addPhone } = useContext(adminContext);
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    addPhone(data);
    navigate("/admin");
  };

  //
  const schema = yup.object({
    name: yup.string().min(3, "min 3").max(20, "max 20").required("Required"),
    description: yup
      .string()
      .min(5, "min 5")
      .max(3000, "max 255")
      .required("Required"),
    brand: yup.string().required("Required"),
    image: yup.string().required("Required"),
    price: yup.number().min(3, "min 3").required("Required"),
    color: yup.string().required("Required"),
    modal: yup
      .string()
      .min(1, "min 1")
      .max(255, "max 255")
      .required("Required"),
  });

  return (
    <div className="add-page">
      <h2>Add Phone</h2>
      <Link to="/admin">
        <h2>NAZAD</h2>
      </Link>

      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          description: "",
          brand: "",
          image: "",
          price: "",
          color: "",
          modal: "",
        }}
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
              Add device
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPage;
