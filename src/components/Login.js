import { useDispatch, useSelector } from "react-redux";

import { loginformStyles } from "../styles/loginformStyles";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { selectRegisterForm, switchForm } from "../redux/registerFormSlice";

function Login() {
  const dispatch = useDispatch();
  const registerForm = useSelector(selectRegisterForm);

  let style = {
    ...loginformStyles,
    input: {
      ...loginformStyles.input,
      border: registerForm ? "1px solid lightgrey" : "2px solid red",
    },
    loginWindow: {
      ...loginformStyles.loginWindow,
      height: registerForm ? "350px" : "600px",
    },
  };

  let styleRegister = {
    ...style.loginRegister,
    color: registerForm ? "white" : "black",
    backgroundColor: registerForm ? "orange" : "white",
  };

  let styleLogin = {
    ...style.loginRegister,
    right: "0",
    zIndex: "2",
    color: registerForm ? "black" : "white",
    backgroundColor: registerForm ? "white" : "orange",
  };
  return (
    <div style={style.loginWindow}>
      <div style={style.loginRegisterParent}>
        <div style={styleRegister} onClick={() => dispatch(switchForm(false))}>
          Register
        </div>
        <div style={styleLogin} onClick={() => dispatch(switchForm(true))}>
          Sign in here
        </div>
      </div>
      <div style={style.inputWindow}>
        {registerForm ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default Login;
