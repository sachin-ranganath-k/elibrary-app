import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeNavBar from "../NavBar/HomeNavBar";
import { SignIn_SignUp } from "../../constants/constants";
import Toaster from "../toaster/toaster";

const theme = createTheme();

const UserRegister = () => {
  const [toaster, setToaster] = useState(false);
  const [inputFields, setInputFields] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const handleFields = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const { userName, userEmail, userPassword } = inputFields;

  const submitData = () => {
    if (userName === "") {
      setToaster(true);
    } else {
      console.log("Correct");
    }
  };

  return (
    <>
      <HomeNavBar />
      {toaster && <Toaster />}
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label={SignIn_SignUp.ENTER_NAME}
                name="userName"
                onChange={handleFields}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="userEmail"
                label={SignIn_SignUp.ENTER_EMAIL}
                name="userEmail"
                onChange={handleFields}
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label={SignIn_SignUp.SET_PASSWORD}
                type="userPassword"
                name="userPassword"
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
