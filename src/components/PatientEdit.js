import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../redux/userSlice";
import {
  addPatient,
  addUser,
  removePatient,
  removeUser,
  selectCurrentUser,
  selectListUser,
  selectPatient,
  selectPatientsId,
} from "../redux/listUserSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faBars } from "@fortawesome/free-solid-svg-icons";

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
    textDecoration: "none",
  },
  link: {
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
    textDecoration: "none",
    textAlign: "center",
    paddingTop: "7px",
  },
};

function PatientEdit(props) {
  const { index } = useParams();
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const listUser = useSelector(selectListUser);
  const allPatients = useSelector(selectPatientsId);
  // const importedPatient = user.patients.filter((e) => e.index === index)[0];

  const importedPatient = useSelector(selectPatient);
  // console.table(testImportedPatient);
  // console.table(importedPatient);

  const [patientData, setPatientData] = useState(importedPatient);
  const iconBack = <FontAwesomeIcon icon={faBackward} />;

  function handleSubmit(e) {
    e.preventDefault();
    let dataForReducer = {
      userID: user.login,
      patient: patientData,
    };
    dispatch(removePatient(dataForReducer));
    dispatch(addPatient(dataForReducer));
    // for (let i = 0; i < user.patients.length; i++) {
    //   if (listUser[i].index === user.index) {
    //     dispatch(removeUser(listUser[i]));
    //   }
    // }
    //
    // e.preventDefault();
    // dispatch(removeUser(user));
    // for (let i = 0; i < listUser.length; i++) {
    //   if (listUser[i].login === user.login) {
    //     dispatch(removeUser(listUser[i]));
    //     console.log(listUser[i]);
    //   }
    // }
    // dispatch(setUser(userData));
    // dispatch(addUser(userData));

    console.log(patientData);
  }

  return (
    <>
      <h1 style={style.h1}>Patient ID: {index}</h1>

      <section style={style.section}>
        <form style={style.data} onSubmit={(e) => handleSubmit(e)}>
          <label>First name</label>
          <input
            style={style.input}
            value={patientData.name}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                name: e.target.value,
              })
            }
          />
          <label>Surname</label>
          <input
            style={style.input}
            value={patientData.surname}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                surname: e.target.value,
              })
            }
          />
          <label>Email address</label>
          <input
            style={style.input}
            value={patientData.email}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                email: e.target.value,
              })
            }
          />{" "}
          <label>Gender</label>
          <input
            style={style.input}
            value={patientData.gender}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                gender: e.target.value,
              })
            }
          />
          <label>Phone number</label>
          <input
            style={style.input}
            value={patientData.telephone}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                telephone: e.target.value,
              })
            }
          />
          <label>Date of birth</label>
          <input
            style={style.input}
            value={patientData.birth}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                birth: e.target.value,
              })
            }
          />
          <label>Location</label>
          <input
            style={style.input}
            value={patientData.location}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                location: e.target.value,
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
          <Link style={style.link} to={"/my-patients/"}>
            {iconBack} Back
          </Link>
        </form>
      </section>
    </>
  );
}

export default PatientEdit;
