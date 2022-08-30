import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../redux/userSlice";
import {
  addPatient,
  addUser,
  removeUser,
  selectListUser,
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

function PatientEdit() {
  const { index } = useParams();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const allPatients = useSelector(selectPatientsId);
  const importedPatient = user.patients.filter((e) => e.index === index)[0];

  // console.log(parseInt(allPatients[allPatients.length - 1]) + 1);
  // console.log(parseInt(allPatients[allPatients.length - 1]) + 1);
  // console.log(parseInt(allPatients[allPatients.length - 1]) + 1);

  const [patientData, setPatientData] = useState({
    name: "",
    surname: "",
    email: "",
    gender: "",
    birth: "",
    location: "",
    telephone: "",
    index:
      allPatients.length !== 1
        ? parseInt(allPatients[allPatients.length - 1]) + 1
        : 1000,
    mutation: "",
    classification: "",
    seizureDiary: "",
  });
  const iconBack = <FontAwesomeIcon icon={faBackward} />;

  function handleSubmit(e) {
    e.preventDefault();
    let dataForReducer = {
      userID: user.login,
      patient: patientData,
    };
    dispatch(addPatient(dataForReducer));
  }

  return (
    <>
      <h1 style={style.h1}>Patient ID: {patientData.index}</h1>
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
            Add patient
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
