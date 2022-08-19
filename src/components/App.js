import "../App.css";
import Landing from "./Landing";
import Menu from "./Menu";
import React from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import Header from "./Header";

const style = {
  app: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "arial, sans",
    minWidth: "800px",
    boxSizing: "border-box",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
};

function App() {
  return (
    <>
      <div style={style.app}>
        <Menu />
        <div style={style.main}>
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
