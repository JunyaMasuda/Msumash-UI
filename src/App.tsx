import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SmashAppBar from "./SmashAppBar";
import MatchMaker from "./MatchMaker";
import { Box } from "@mui/material";

export type mode = "match-maker" | "home";

const App = () => {
  const [current, setCurrent] = useState("home" as mode);

  const content = () => {
    switch (current) {
      case "home":
        return (
          <Box
            sx={{
              mx: "auto",
              width: "70%",
              p: 1,
            }}
          >
            <h1>Smash Home</h1>
            <div className="center">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p className="center">powerd by React</p>
          </Box>
        );
      case "match-maker":
        return <MatchMaker />;
    }
  };

  return (
    <>
      <SmashAppBar current={current} setCurrent={setCurrent} />
      {content()}
    </>
  );
};

export default App;
