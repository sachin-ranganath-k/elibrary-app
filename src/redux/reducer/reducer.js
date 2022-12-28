import {
  FETCH_USERS,
  GET_DATA,
  SHOW_FILEDS_ERROR,
  SUBMIT_USER_REGISTER_DATA,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
} from "../actions/actionConstants";

const initialState = {
  newUserData: [],
  userRegisterSuccess: "",
  usersList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_USER_REGISTER_DATA:
      return {
        ...state,
        newUserData: action.payload,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userRegisterSuccess: action.payload,
      };

    case USER_REGISTER_FAILURE:
      return {
        ...state,
        userRegisterSuccess: action.payload,
      };

    case FETCH_USERS:
      return {
        ...state,
        usersList: action.payload,
      };

    // case SHOW_FILEDS_ERROR:
    //   console.log(action.payload);
    //   if (action.payload ==="Name should not blank and should contain only alphabets."
    //   ) {
    //     return {
    //       ...state,
    //       showFieldsError: (initialState.showFieldsError.name = true),
    //     };
    //   }
    // else if (action.payload === "Enter valid email") {
    //   return {
    //     ...state,
    //     showFieldsError: (initialState.showFieldsError.userEmailError = true),
    //   };
    // }
    // else{
    //   console.log("Both done")
    // }
    // if (action.payload === `${passwordError}`) {
    //   return {
    //     ...state,
    //     showFieldsError: {
    //       passwordError: true,
    //     },
    //   };
    // }
    // else{
    //   console.log("pass Done")
    // }

    default:
      return state;
  }
};

export default userReducer;
