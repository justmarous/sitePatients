import React, { useState } from "react";
import { doReset } from "../redux/resetSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectListUser } from "../redux/listUserSlice";
import { loginformStyles } from "../styles/loginformStyles";
import { setUser } from "../redux/userSlice";

function LoginForm(props) {
  const listUser = useSelector(selectListUser);
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(false);
  const [noSuchUser, setNoSuchUser] = useState(false);

  const style = loginformStyles;

  function logIn(e) {
    e.preventDefault();
    for (let i = 0; i < listUser.length; i++) {
      if (
        listUser[i].login === credentials.login &&
        listUser[i].password === credentials.password
      ) {
        console.log("logging in...");
        dispatch(setUser(listUser[i]));
        setNoSuchUser(false);
      } else {
        console.log("no such user");
        setNoSuchUser(true);
      }
    }
  }

  return (
    <form onSubmit={(e) => logIn(e)}>
      <p>ENTER YOUR EMAIL</p>
      <input
        type={"text"}
        alt={"Enter your email"}
        style={style.input}
        onChange={(e) =>
          setCredentials({ ...credentials, login: e.target.value })
        }
      />
      <p>ENTER YOUR PASSWORD</p>
      <input
        type={passwordShown ? "text" : "password"}
        alt={"Enter your password"}
        style={style.input}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <input
        type="checkbox"
        onClick={() => setPasswordShown(!passwordShown)}
        style={style.checkbox}
      />
      <span>Show password</span>

      {noSuchUser ? <p style={style.checkLogin}>Check credentials</p> : null}

      <button type={"submit"} style={style.button} onClick={(e) => logIn(e)}>
        Sign in
      </button>
      <p style={style.link} onClick={() => dispatch(doReset())}>
        I forgot my password
      </p>
    </form>
  );
}

export default LoginForm;
