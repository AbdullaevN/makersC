import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MediaCard from "../components/MediaCard";
import { clientContext } from "../contexts/ClientContext";
import { useNavigate } from "react-router";
import Pagination from "../components/Pagination";

const MainPage = () => {
  const { getPhones, phones, currentPosts } = useContext(clientContext);
  //
  //
  const navigate = useNavigate();

  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterPhones(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;

    console.log(newUrl);
    navigate(newUrl);
    getPhones();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("brand"));
  }, [object]);

  //
  useEffect(() => {
    getPhones();
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="sidebar">
          <FormControl component="fieldset">
            <FormLabel component="legend">Brand</FormLabel>
            <RadioGroup
              aria-label="filter"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterPhones("brand", e.target.value)}
            >
              <FormControlLabel value="MI" control={<Radio />} label="MI" />
              <FormControlLabel
                value="Samsung"
                control={<Radio />}
                label="Samsung"
              />
              <FormControlLabel
                value="Apple"
                control={<Radio />}
                label="iPhone"
              />
              <FormControlLabel
                value="Nokia"
                control={<Radio />}
                label="Nokia"
              />
              <FormControlLabel value="ZTE" control={<Radio />} label="ZTE" />
              <FormControlLabel value="SONY" control={<Radio />} label="SONY" />
              <FormControlLabel
                value="REALME"
                control={<Radio />}
                label="REALME"
              />
              <FormControlLabel
                value="LENOVO"
                control={<Radio />}
                label="Lenovo"
              />
              <FormControlLabel value="ASUS" control={<Radio />} label="Asus" />
              <FormControlLabel
                value="HONOR"
                control={<Radio />}
                label="HONOR"
              />
              <FormControlLabel
                value="GOOGLE"
                control={<Radio />}
                label="GOOGLE"
              />
              <FormControlLabel
                value="INFINIX"
                control={<Radio />}
                label="INFINIX"
              />
              <FormControlLabel
                value="MOTOROLA"
                control={<Radio />}
                label="MOTOROLA"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {phones ? (
          <>
            <div className="phones">
              {currentPosts.map((item) => (
                <MediaCard item={item} key={item.id} />
              ))}
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default MainPage;
