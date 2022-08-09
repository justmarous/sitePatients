import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes, Switch } from "react-router-dom";
import Support from "./components/Support";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import MyPatients from "./components/MyPatients";
import Landing from "./components/Landing";
import Menu from "./components/Menu";

const Test = () => {
  console.log("dupa");
  return (
    <>
      <h1>yeye oh</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

function Dupa() {
  console.log("dupa render");
  return <h1>Wrong address</h1>;
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Menu />
                <Landing
                  style={{
                    position: "fixed",
                    top: "10px",
                    display: "block",
                  }}
                />
                {/*<App />*/}
              </>
            }
          />
          <Route
            path="/support"
            element={
              <>
                <Support />
              </>
            }
          />
          <Route
            path="/my-patients"
            element={
              <>
                <App />
                <MyPatients
                  style={{
                    position: "fixed",
                    top: "10px",
                    display: "block",
                  }}
                />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <App />
                <Dupa
                  style={{
                    position: "relative",
                    top: "10px",
                    display: "block",
                  }}
                />
              </>
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
