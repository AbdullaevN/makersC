import axios from "axios";
import React, { useContext, useReducer } from "react";
import { API } from "../helpers/const";

export const adminContext = React.createContext();

const INIT_STATE = {
  phones: null,
  phonesEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PHONES":
      return { ...state, phones: action.payload };
    case "GET_PHONE_TO_EDIT":
      return { ...state, phonesEdit: action.payload };
    case "CLEAR_STATE":
      return { ...state, phonesEdit: action.payload };
    default:
      return state;
  }
};

const AdminContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //create
  const addPhone = async (data) => {
    try {
      const response = await axios.post(API, data);
      console.log(response);
      getPhones();
    } catch (e) {
      console.log(e);
    }
  };

  //read
  const getPhones = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PHONES",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  //edit- update
  //Отображаем данные для редактирования
  const getPhoneToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PHONE_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };
  const saveGetPhoneToEdit = async (editedPhone) => {
    try {
      const response = await axios.patch(
        `${API}/${editedPhone.id}`,
        editedPhone
      );
      getPhones();
      clearState();
    } catch (e) {
      console.log(e);
    }
  };

  const clearState = () => {
    let action = {
      type: "CLEAR_STATE",
      payload: null,
    };
    dispatch(action);
  };

  const deleteGetPhone = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      getPhones();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <adminContext.Provider
      value={{
        addPhone,
        getPhones,
        getPhoneToEdit,
        saveGetPhoneToEdit,
        clearState,
        deleteGetPhone,
        phones: state.phones,
        phonesEdit: state.phonesEdit,
        editedPhone: state.editedPhone,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;
