import React, { useEffect, useState } from "react";
import { loginformStyles } from "../styles/loginformStyles";
import { selectUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../tools/formSchema";
import { addUser, removeUser } from "../redux/listUserSlice";
import { setUser } from "../redux/userSlice";
import { selectListUser } from "../redux/listUserSlice";

const style = {
  h1: {
    fontSize: "20px",
    padding: "0 30px",
    fontWeight: "600",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 30px",
  },
  h2: {
    fontSize: "17px",
    padding: "12px 10px 12px 30px",
  },
  input: {
    margin: "10px 30px",
    fontSize: "17px",
  },
  button: {
    position: "relative",
    borderRadius: "10px",
    width: "250px",
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
  },
};

const Configure = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const listUser = useSelector(selectListUser);

  const {
    register,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const [userData, setUserData] = useState({
    name: user.name,
    surname: user.surname,
    login: user.login,
    telephone: user.telephone,
    country: user.country,
    password: user.password,
    patients: user.patients,
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(removeUser(user));
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].login === user.login) {
        dispatch(removeUser(listUser[i]));
        console.log(listUser[i]);
      }
    }
    dispatch(setUser(userData));
    dispatch(addUser(userData));
  }

  return (
    <>
      <h1 style={style.h1}>Your data</h1>
      <section style={style.section}>
        <div style={style.data}>
          <h2 style={style.h2}>Name</h2>
          <h2 style={style.h2}>Surname</h2>
          <h2 style={style.h2}>Phone</h2>
          <h2 style={style.h2}>Country</h2>
        </div>
        <form style={style.data} onSubmit={(e) => handleSubmit(e)}>
          <input
            style={style.input}
            value={userData.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
          />
          <input
            style={style.input}
            value={userData.surname}
            onChange={(e) =>
              setUserData({
                ...userData,
                surname: e.target.value,
              })
            }
          />
          <input
            style={style.input}
            value={userData.telephone}
            onChange={(e) =>
              setUserData({
                ...userData,
                telephone: e.target.value,
              })
            }
          />
          <input
            style={style.input}
            value={userData.country}
            onChange={(e) =>
              setUserData({
                ...userData,
                country: e.target.value,
              })
            }
          />
          <button
            type={"submit"}
            style={style.button}
            onClick={(e) => handleSubmit(e)}
          >
            Change data
          </button>
        </form>
      </section>
    </>
  );
};

export default Configure;
