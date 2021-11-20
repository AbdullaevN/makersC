import { Button } from "@mui/material";
import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { clientContext } from "../contexts/ClientContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DetailPage = () => {
  const { getDetails, details } = useContext(clientContext);
  const params = useParams();
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log(details);
  return (
    <Fragment>
      <div>
        {details ? (
          <div className="detail-page">
            <div className="detail-image">
              <img src={details.image} />
            </div>
            <div>
              <h2>{details.name}</h2>
              <p>{details.description}</p>

              <div>
                <h4>Характеристики: </h4>
                <ul className="character">
                  <li>
                    <strong>Price: </strong>
                    <span>{details.price}</span>
                  </li>
                  <li>
                    <strong>Color: </strong>
                    <span>{details.color} </span>
                  </li>
                  <li>
                    <strong>Brand: </strong>
                    <span>{details.brand}</span>
                  </li>
                  <li>
                    <strong>Model: </strong>
                    <span>{details.modal} </span>
                  </li>
                </ul>
              </div>
              <Button variant="outlined" color="primary">
                Add
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Fragment>
  );
};

export default DetailPage;
