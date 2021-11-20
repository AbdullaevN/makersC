import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { adminContext } from "../contexts/AdminContext";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function BasicTable() {
  const { getPhones, phones, deleteGetPhone } = useContext(adminContext);
  React.useEffect(() => {
    getPhones();
  }, []);

  return (
    <React.Fragment>
      {phones ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Описание</TableCell>
                <TableCell align="right">Бренд</TableCell>
                <TableCell align="right">Фото</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">Цвет</TableCell>
                <TableCell align="right">Модель</TableCell>
                <TableCell align="right">#</TableCell>
                <TableCell align="right">#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {phones.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Tooltip title={item.description}>
                      <p> {item.description.slice(0, 20)}...</p>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">{item.brand}</TableCell>
                  <TableCell align="right">
                    <img width="50" src={item.image} alt="image" />
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.color}</TableCell>
                  <TableCell align="right">{item.modal}</TableCell>
                  <TableCell align="right">
                    <Link to={`/admin/edit/${item.id}`}>
                      <Button variant="outlined">Edit</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => deleteGetPhone(item.id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </React.Fragment>
  );
}
