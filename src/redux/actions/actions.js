import {
  FETCH_USERS,
  SHOW_FILEDS_ERROR,
  SUBMIT_USER_REGISTER_DATA,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
} from "./actionConstants";
import axios from "axios";
import {FETCH_USERS_API, USER_REGISTER } from "../../endPoints/endPoints";

export const fetchUsers = () => {
  return async function (dispatch) {
    await axios
      .get(`${FETCH_USERS_API}`)
      .then((res) => {
        dispatch({ type: FETCH_USERS, payload:res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_REGISTER_FAILURE, payload: "Failed" });
      });
  };
};

export const submitUserRegisterData = (payload) => {
  return async function (dispatch) {
    await axios
      .post(`${USER_REGISTER}`, payload)
      .then((res) => {
        dispatch({ type: SUBMIT_USER_REGISTER_DATA, payload });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: "Success" });
      })
      .catch((err) => {
        dispatch({ type: USER_REGISTER_FAILURE, payload: "Failed" });
      });
  };
};

//Yet to develop
export const showFieldsError = (payload) => {
  // return function (dispatch) {
  return {
    type: SHOW_FILEDS_ERROR,
    payload,
  };
};
