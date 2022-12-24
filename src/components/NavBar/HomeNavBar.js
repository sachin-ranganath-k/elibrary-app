import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { HomeNavBarElements } from "./HomeNavBarElements";
import { useNavigate } from "react-router-dom";

const HomeNavBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Library Source
          </Typography>
          {HomeNavBarElements.map((element) => (
            <div key={element.key}>
              <Button color="inherit" onClick={() => navigate(element.path)}>
                {element.label}
              </Button>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomeNavBar;
