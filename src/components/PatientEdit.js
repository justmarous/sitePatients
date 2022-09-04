import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectUser, setUser } from "../redux/userSlice";
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
import { patientEditStyle as style } from "../styles/patientEditStyle";

function PatientEdit(props) {
  const { index } = useParams();
  const currentUserLogin = useSelector(selectLogin);
  const user = useSelector(selectCurrentUser(currentUserLogin));
  const dispatch = useDispatch();
  const patient = useSelector(selectPatient(index, currentUserLogin));
  const [patientData, setPatientData] = useState(patient);
  const iconBack = <FontAwesomeIcon icon={faBackward} />;

  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let dataForReducer = {
      userID: user.login,
      patient: patientData,
    };
    dispatch(removePatient(dataForReducer));
    dispatch(addPatient(dataForReducer));
    navigate(-1);
  }

  return (
    <>
      {patient !== undefined ? (
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
      ) : (
        <h1 style={style.h1}>There are no such patient</h1>
      )}
    </>
  );
}

export default PatientEdit;
