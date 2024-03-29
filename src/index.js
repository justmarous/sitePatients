import React from "react";
import ReactDOM from "react-dom/client";
import Configure from "./components/Configure";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import Support from "./components/Support";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import MyPatients from "./components/MyPatients";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Patient from "./components/Patient";
import PatientEdit from "./components/PatientEdit";
import PatientAdd from "./components/PatientAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));

function WrongWay() {
  return <h1>Wrong address</h1>;
}

const style = {
  app: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "poppins, helvetica, arial",
    minWidth: "800px",
    boxSizing: "border-box",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div style={style.app}>
                <Menu style={{ position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <Landing />
                </div>
              </div>
            }
          />
          <Route
            path="/support"
            element={
              <div style={style.app}>
                <Menu style={{ position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <Support style={style.main} />
                </div>
              </div>
            }
          />
          <Route
            path="/my-patients"
            element={
              <div style={style.app}>
                <Menu style={{ position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <MyPatients style={style.main} />
                </div>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div style={style.app}>
                <Menu style={{ position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <WrongWay />
                </div>
              </div>
            }
          />
          <Route
            path="/configure"
            element={
              <div style={style.app}>
                <Menu style={{ display: "relative", position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <Configure />
                </div>
              </div>
            }
          />
          <Route
            path="/my-patients/:index"
            element={
              <div style={style.app}>
                <Menu style={{ display: "relative", position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <Patient />
                </div>
              </div>
            }
          />{" "}
          <Route
            path="/my-patients/:index/edit"
            element={
              <div style={style.app}>
                <Menu style={{ display: "relative", position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <PatientEdit />
                </div>
              </div>
            }
          />{" "}
          <Route
            path="/add"
            element={
              <div style={style.app}>
                <Menu style={{ display: "relative", position: "fixed" }} />
                <div style={style.main}>
                  <Header />
                  <PatientAdd />
                </div>
              </div>
            }
          />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
