import { GET_DATA } from "../actions/actionConstants";

const initialState = {
  dummyData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        dummyData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
