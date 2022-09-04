import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { selectLogin, selectUser } from "../redux/userSlice";
import {
  addPatient,
  removePatient,
  selectCurrentUser,
  selectPatient,
  selectPatientsId,
} from "../redux/listUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { patientProfileStyles as style } from "../styles/patientProfileStyles";

function Patient(props) {
  const { index } = useParams();
  const currentUserLogin = useSelector(selectLogin);
  const allPatients = useSelector(selectPatientsId(currentUserLogin));
  const patient = useSelector(selectPatient(index, currentUserLogin));
  const iconBack = <FontAwesomeIcon icon={faBackward} />;
  const user = useSelector(selectCurrentUser(currentUserLogin));
  const dispatch = useDispatch();
  const [patientData, setPatientData] = useState(patient);

  const Profile = () => {
    return (
      <div style={style.profile.box}>
        <div style={style.profile.top}>
          <div style={style.titles}>
            <div style={style.circle} />
            Profile information
          </div>
          <Link
            style={style.profile.edit}
            to={"/my-patients/" + index + "/edit"}
          >
            Edit patient's profile
          </Link>
        </div>
        <section style={style.profile.data}>
          <div style={style.profile.names}>
            {patient.name} {patient.surname}
          </div>
          <div style={style.profile.birth}>
            Date of birth: <span style={style.normalText}>{patient.birth}</span>
          </div>
          <div style={style.profile.birth}>
            Location: <span style={style.normalText}>{patient.location}</span>
          </div>
        </section>
      </div>
    );
  };

  const Genetics = () => {
    const [mutation, setMutation] = useState(patient.mutation);
    const [classification, setClassification] = useState(
      patient.classification
    );

    function handleClick() {
      let dataForReducer = {
        userID: user.login,
        patient: {
          ...patientData,
          classification: classification,
          mutation: mutation,
        },
      };
      dispatch(removePatient(dataForReducer));
      dispatch(addPatient(dataForReducer));
    }

    return (
      <div style={style.genetics.box}>
        <div style={style.profile.top}>
          <div style={style.titles}>
            <div style={style.circle} />
            Genetics
          </div>
          <button style={style.genetics.edit} onClick={() => handleClick()}>
            Save
          </button>
        </div>
        <p style={style.genetics.title}>Mutation</p>
        <input
          type="text"
          value={mutation}
          style={style.genetics.mutation}
          onChange={(e) => setMutation(e.target.value)}
        />
        <p style={style.genetics.title}>Classification</p>
        <textarea
          value={classification}
          style={style.genetics.input}
          onChange={(e) => setClassification(e.target.value)}
        />
      </div>
    );
  };

  const Diary = () => {
    const [seizureDiary, setSeizureDiary] = useState(patient.seizureDiary);

    function handleClick() {
      let dataForReducer = {
        userID: user.login,
        patient: {
          ...patientData,
          seizureDiary: seizureDiary,
        },
      };
      dispatch(removePatient(dataForReducer));
      dispatch(addPatient(dataForReducer));
    }

    return (
      <div style={style.diary.box}>
        <div style={style.titles}>
          <div style={style.circle} />
          Seizure dairy
        </div>
        <button style={style.diary.edit} onClick={() => handleClick()}>
          Save changes
        </button>
        <textarea
          value={seizureDiary}
          style={style.diary.input}
          onChange={(e) => setSeizureDiary(e.target.value)}
        />
      </div>
    );
  };

  return (
    <>
      <div style={style.header}>
        {patient === undefined ? null : (
          <h1 style={style.h1}>
            Welcome to the Den 97 {patient.name}'s Centre
          </h1>
        )}
      </div>
      {allPatients.indexOf(parseInt(index)) !== -1 ? (
        <section style={style.main}>
          <Profile />
          <div style={style.secondRow}>
            <Genetics />
            <Diary />
          </div>
        </section>
      ) : (
        <h1> There is no such patient as {index}</h1>
      )}
      <Link style={style.link} to={"/my-patients/"}>
        {iconBack} Back
      </Link>
    </>
  );
}

export default Patient;
