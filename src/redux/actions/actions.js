import {
  GET_DATA,
  SHOW_FILEDS_ERROR,
  SUBMIT_USER_REGISTER_DATA,
  USER_REGISTER_SUCCESS,
} from "./actionConstants";
import axios from "axios";
import { USER_REGISTER } from "../../endPoints/endPoints";

// export const getData = () => {
//   return async function (dispatch) {
//     await axios
//       .get("http://localhost:3001/apiData")
//       .then((res) => {
//         // console.log(res);
//         return dispatch({
//           type: GET_DATA,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export const submitUserRegisterData = (payload) => {
  return function (dispatch) {
    axios
      .post(`${USER_REGISTER}`, payload)
      .then((res) => {
        dispatch({ type: SUBMIT_USER_REGISTER_DATA, payload });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: true });
      })
      .catch((err) => {
        console.log(err);
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
