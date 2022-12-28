export const HomePageNavbar = {
  TITLE: "E-Library Source",
  SIGN_IN: "SIGN IN",
  SIGN_UP: "SIGN UP",
};

export const SignIn_SignUp = {
  SIGN_IN: "Sign In",
  ENTER_EMAIL_ADDRESS: "Enter Registered Email ID",
  ENTER_PASSWORD: "Enter Password",

  SET_PASSWORD: "Set Password",
  SIGN_UP: "Sign Up",
  ENTER_NAME: "Enter Your Name",
  ENTER_EMAIL: "Enter Email ID",

  REGISTER_SUCCESS_MSG:"Registered Successfully..! Redirecting to Login Page",
  REGISTER_FAILURE_MSG:"Something went wrong..! Please try later",

  REGISTER_USER_EXIST:"User already exists..!"
};

export const patterns = {
  regName: /^[A-Za-z]+$/,
  regEmail: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
};

export const userNameFieldError = "Name should not blank and should contain only alphabets."
export const userEmailFieldError ="Enter valid email"
export const passwordError = (
  <p style={{ color: "red" }}>Password should be of min 8 characters</p>
);
