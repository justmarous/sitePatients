import React, { useState } from "react";
import { doReset, selectResettingState } from "../redux/resetSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faPen, faX } from "@fortawesome/free-solid-svg-icons";

function ResetPassword(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  let style = {
    icon: {
      position: "absolute",
      color: "orange",
      fontSize: "20px",
      fontWeight: "100",
      top: "20px",
      right: "30px",
      cursor: "pointer",
    },
    loginWindow: {
      boxSizing: "border-box",
      position: "fixed",
      boxShadow: "0px 1px 20px rgba(0,0,0,0.35)",
      top: "40%",
      transform: "translate(-50%,-50%)",
      zIndex: "2",
      backgroundColor: "white",
      height: "300px",
      left: "60%",
      borderRadius: "15px",
      width: "400px",
    },
    input: {
      display: "block",
      width: "100%",
      height: "30px",
      borderRadius: "4px",
      border: "1px solid lightgrey",
      fontSize: "19px",
      fontWeight: "100",
    },
    inputWindow: {
      position: "absolute",
      fontSize: "9px",
      top: "40px",
      justifyContent: "space-around",
      left: "40px",
      fontWeight: "300",
      right: "40px",
    },
    button: {
      width: "50%",
      display: "block",
      margin: "30px 25%",
      border: "none",
      color: "white",
      backgroundColor: "green",
      fontWeight: "700",
      fontSize: "16px",
      height: "40px",
      marginBottom: "5px",
      cursor: "pointer",
      borderRadius: "20px",
    },
    h1: {
      textAlign: "center",
      fontSize: "17px",
      width: "90%",
      padding: "0 5%",
    },
  };

  const iconCross = <FontAwesomeIcon style={style.icon} icon={faX} />;

  return (
    <div style={style.loginWindow}>
      <div onClick={() => dispatch(doReset())}>{iconCross}</div>
      <div style={style.inputWindow}>
        <h2 style={style.h1}>
          Please enter your email, we will send you a link that will help you
          reset your password
        </h2>
        <p>ENTER EMAIL HERE</p>
        <input
          type={"text"}
          alt={"Enter your email"}
          style={style.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={style.button} onClick={() => dispatch(doReset())}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
