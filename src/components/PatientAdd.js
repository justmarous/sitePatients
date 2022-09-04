import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectUser, setUser } from "../redux/userSlice";
import {
  addPatient,
  addUser,
  removeUser,
  selectCurrentUser,
  selectListUser,
  selectPatientsId,
} from "../redux/listUserSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { patientAddStyle as style } from "../styles/patientAddStyle";

function PatientEdit() {
  const currentUserLogin = useSelector(selectLogin);
  const user = useSelector(selectCurrentUser(currentUserLogin));
  const dispatch = useDispatch();
  const allPatients = useSelector(selectPatientsId(currentUserLogin));

  const [patientData, setPatientData] = useState({
    name: "",
    surname: "",
    email: "",
    gender: "",
    birth: "",
    location: "",
    telephone: "",
    index:
      allPatients.length > 0
        ? parseInt(allPatients[allPatients.length - 1]) + 1
        : 1000,
    mutation: "",
    classification: "",
    seizureDiary: "",
  });
  const iconBack = <FontAwesomeIcon icon={faBackward} />;

  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let dataForReducer = {
      userID: user.login,
      patient: patientData,
    };
    dispatch(addPatient(dataForReducer));
    navigate(-1);
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
            style={style.link}
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
