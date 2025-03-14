import React from "react";
import "../../App.css";
import { HelloWorld } from "./HelloWorld";
import logo from "../../assets/logo.svg";
import { Stack } from "@mui/material";
export const HomePage = () => {
  return (
    <Stack className="App-header" sx={{
      
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 8, sm: 10 },
            textAlign: { sm: 'center', md: 'left' },
          }}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <HelloWorld route={"helloRoute"} />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Stack>
  );
};
