import React, { useContext, useEffect } from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import { adminContext } from "../contexts/AdminContext";

const AdminPage = () => {
  const { clearState } = useContext(adminContext);
  useEffect(() => {
    clearState();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <h2>Admin Page</h2>
        <div>
          <Link to="/admin/add">
            <Button variant="outlined" color="info">
              Add Phone
            </Button>
          </Link>
          <div>
            <BasicTable />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
