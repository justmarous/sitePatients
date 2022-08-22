import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPatientsId, selectUser, setUser } from "../redux/userSlice";
import { addUser, removeUser, selectListUser } from "../redux/listUserSlice";

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
    width: "450px",
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

function PatientEdit(props) {
  const { index } = useParams();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const listUser = useSelector(selectListUser);
  const allPatients = useSelector(selectPatientsId);
  const patient = user.patients.filter((e) => e.index === index)[0];

  const [userData, setUserData] = useState({
    ...user,
    patients: user.patients,
  });

  // {
  //   name: "Miko",
  //       surname: "Ortega",
  //     email: "megasnake@gmail.com",
  //     gender: "male",
  //     birth: "2000-11-02",
  //     location: "New Orlean",
  //     telephone: "+190 103 212 135",
  //     index: "12313",
  //     mutation: "",
  //     classification: "",
  //     seizureDiary: "",
  // },

  function handleSubmit(e) {
    for (let i = 0; i < user.patients.length; i++) {
      if (listUser[i].index === user.index) {
        dispatch(removeUser(listUser[i]));
      }
    }

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
      <h1 style={style.h1}>Patient ID: {index}</h1>
      {allPatients.indexOf(index) !== -1 ? (
        <section style={style.section}>
          <form style={style.data} onSubmit={(e) => handleSubmit(e)}>
            <label>First name</label>
            <input
              style={style.input}
              value={patient.name}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  name: e.target.value,
                })
              }
            />
            <label>Surname</label>
            <input
              style={style.input}
              value={patient.surname}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  surname: e.target.value,
                })
              }
            />
            <label>Email address</label>
            <input
              style={style.input}
              value={patient.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  surname: e.target.value,
                })
              }
            />{" "}
            <label>Gender</label>
            <input
              style={style.input}
              value={patient.gender}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  surname: e.target.value,
                })
              }
            />
            <label>Phone number</label>
            <input
              style={style.input}
              value={patient.telephone}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  telephone: e.target.value,
                })
              }
            />
            <label>Date of birth</label>
            <input
              style={style.input}
              value={patient.birth}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  country: e.target.value,
                })
              }
            />
            <label>Location</label>
            <input
              style={style.input}
              value={patient.location}
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
      ) : (
        <p> There is no such patient as {index}</p>
      )}
    </>
  );
}

export default PatientEdit;
