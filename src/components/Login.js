import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doReset, selectResettingState } from "../redux/resetSlice";
import { selectListUser } from "../redux/listUserSlice";
import { setUser } from "../redux/userSlice";
import { useForm } from "react-hook-form";
import { loginformStyles } from "../styles/loginformStyles";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Login() {
  const listUser = useSelector(selectListUser);
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState(false);
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const [noSuchUser, setNoSuchUser] = useState(false);
  const resetting = useSelector(selectResettingState);

  let style = {
    ...loginformStyles,
    input: {
      ...loginformStyles.input,
      border:
        !noSuchUser || registerForm ? "1px solid lightgrey" : "2px solid red",
    },
    loginWindow: {
      ...loginformStyles.loginWindow,
      height: !registerForm ? "350px" : "600px",
      // leftMargin: !resetting ? "none" : "-20px",
    },
  };

  let styleRegister = {
    ...style.loginRegister,
    color: registerForm ? "black" : "white",
    backgroundColor: registerForm ? "white" : "orange",
  };

  let styleLogin = {
    ...style.loginRegister,
    right: "0",
    zIndex: "2",
    color: !registerForm ? "black" : "white",
    backgroundColor: !registerForm ? "white" : "orange",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div style={style.loginWindow}>
      <div style={style.loginRegisterParent}>
        <div style={styleRegister} onClick={() => setRegisterForm(true)}>
          Register
        </div>
        <div style={styleLogin} onClick={() => setRegisterForm(false)}>
          Sign in here
        </div>
      </div>
      <div style={style.inputWindow}>
        {!registerForm ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default Login;
