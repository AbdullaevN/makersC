import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { clientContext } from "../contexts/ClientContext";

export default function MediaCard(props) {
  const { addEndDeletePhoneCart, checkPhoneInCart } =
    React.useContext(clientContext);
  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, margin: 3 }}>
      <CardMedia
        component="img"
        height="140"
        style={{ objectFit: "contain" }}
        image={props.item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link to={`/phone/cart/${props.item.id}`}> */}
        <Button onClick={() => addEndDeletePhoneCart(props.item)} size="small">
          <ShoppingCartIcon
            color={checkPhoneInCart(props.item.id) ? "error" : "primary"}
          />
        </Button>
        {/* </Link> */}

        <Link to={`/phone/${props.item.id}`}>
          <Button size="small">Подробнее...</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
