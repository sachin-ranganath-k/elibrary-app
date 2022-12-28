import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeNavBar from "../NavBar/HomeNavBar";
import {
  passwordError,
  patterns,
  SignIn_SignUp,
  userEmailFieldError,
  userNameFieldError,
} from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  showFieldsError,
  submitUserRegisterData,
} from "../../redux/actions/actions";

const theme = createTheme();

const UserRegister = () => {
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const userRegisterSuccess = useSelector((state) => state.userRegisterSuccess);

  const handleFields = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const { userName, userEmail, userPassword } = inputFields;
  const a = JSON.stringify(inputFields);

  const submitData = () => {
    dispatch(submitUserRegisterData(a));
  };

  //   if (userName === "" || !patterns.regName.test(userName)) {
  //     dispatch(showFieldsError(userNameFieldError));
  //     // setTimeout(() => {
  //     //   dispatch(showFieldsError(false));
  //     // }, 4000);
  //     return false;
  //   }
  // };
  return (
    <>
      <HomeNavBar />

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {SignIn_SignUp.SIGN_UP}
            </Typography>
            <Box
              component="form"
              // onSubmit={}
              noValidate
              sx={{ mt: 1 }}
            >
              {userRegisterSuccess && <h1>Registered</h1>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label={SignIn_SignUp.ENTER_NAME}
                name="userName"
                value={userName}
                onChange={handleFields}
                autoFocus
              />
              {/* {userNameError && userNameFieldError} */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="userEmail"
                label={SignIn_SignUp.ENTER_EMAIL}
                name="userEmail"
                value={userEmail}
                onChange={handleFields}
                autoComplete="email"
              />
              {/* {userEmailError && userEmailFieldError} */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label={SignIn_SignUp.SET_PASSWORD}
                type="userPassword"
                name="userPassword"
                value={userPassword}
                onChange={handleFields}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submitData}
              >
                {SignIn_SignUp.SIGN_UP}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default UserRegister;
