import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignIn_SignUp } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  submitUserRegisterData,
} from "../../redux/actions/actions";
import HomeNavBar from "../NavBar/HomeNavBar";

import AlertMessage from "../Alerts/Alert";
import { useNavigate } from "react-router";

const theme = createTheme();

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  let [userExist, setUserExist] = useState(false);

  let userRegisterSuccess = useSelector((state) => state.userRegisterSuccess);
  let usersList = useSelector((state) => state.usersList);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleFields = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const { userName, userEmail, userPassword } = inputFields;

  const submitData = () => {
//     for (const a of usersList) {
//       if (a.userEmail === userEmail) {
//         setUserExist(true);
//         return;
//       }
//     }
//     setTimeout(() => {
//       setUserExist(false);
//     });

    dispatch(submitUserRegisterData(JSON.stringify(inputFields)));
    resetData();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  //   if (userName === "" || !patterns.regName.test(userName)) {
  //     dispatch(showFieldsError(userNameFieldError));
  //     // setTimeout(() => {
  //     //   dispatch(showFieldsError(false));
  //     // }, 4000);
  //     return false;
  //   }
  // };

  const resetData = () => {
    inputFields.userName = "";
    inputFields.userEmail = "";
    inputFields.userPassword = "";
  };
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
              {userRegisterSuccess === "Success"
                ? AlertMessage("success", SignIn_SignUp.REGISTER_SUCCESS_MSG)
                : null}
              {userRegisterSuccess === "Failed"
                ? AlertMessage("error", SignIn_SignUp.REGISTER_FAILURE_MSG)
                : null}
              {userExist
                ? AlertMessage("error", SignIn_SignUp.REGISTER_USER_EXIST)
                : null}
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
