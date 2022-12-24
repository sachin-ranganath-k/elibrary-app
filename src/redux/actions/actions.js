import { GET_DATA } from "./actionConstants";
import axios from "axios";

export const getData = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/apiData")
      .then((res) => {
        // console.log(res);
        return dispatch({
          type: GET_DATA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
