import axios from "axios";
import React, { useReducer } from "react";

export const mainContext = React.createContext();
const INIT_STATE = {
  countries: [],
  countryToEdit: null,
};
const API = "http://localhost:8000/countries";

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, countries: action.payload };
    case "GET_COUNTRY_TO_EDIT":
      return { ...state, countryToEdit: action.payload };
    default:
      return state;
  }
};

const MainContextProvider = (props) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  const getData = () => {
    console.log("Hello");
  };
  const addCountry = async (country) => {
    try {
      await axios.post(API, country);
      getCountries();
    } catch (e) {
      console.log(e);
    }
  };
  const getCountries = async () => {
    try {
      const response = await axios(API);
      dispatch({
        type: "GET_COUNTRIES",
        payload: response.data,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const getCountryToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_COUNTRY_TO_EDIT",
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const saveEditedCountry = async (country) => {
    try {
      await axios.patch(`${API}/${country.id}`, country);
      getCountries();
    } catch (e) {
      console.log(e);
    }
  };
  const deleteCountry = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getCountries();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <mainContext.Provider
        value={{
          getData: getData,
          addCountry: addCountry,
          getCountries: getCountries,
          getCountryToEdit: getCountryToEdit,
          saveEditedCountry: saveEditedCountry,
          deleteCountry: deleteCountry,
          countries: state.countries,
          countryToEdit: state.countryToEdit,
        }}
      >
        {props.children}
      </mainContext.Provider>
    </div>
  );
};

export default MainContextProvider;
