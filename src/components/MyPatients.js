import React from "react";
import { useSelector } from "react-redux";
import { selectLogin, selectUser } from "../redux/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../redux/listUserSlice";
import { myPatientsStyles as style } from "../styles/myPatientsStyles";

function MyPatients(props) {
  const currentUserLogin = useSelector(selectLogin);
  const user = useSelector(selectCurrentUser(currentUserLogin));

  return (
    <>
      <div style={style.header}>
        <h1 style={style.h1}>Welcome to the Den 97 Patient Centre</h1>
      </div>
      <section style={style.patients}>
        <NewPatient />
        {user.patients.map((e) => {
          return <Patient patient={e} key={e.index} />;
        })}
      </section>
    </>
  );
}

const NewPatient = () => {
  const iconPlus = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div style={style.createBox}>
      <Link to={"/add/"} style={style.addPatient}>
        {iconPlus} Add a new patient
      </Link>
    </div>
  );
};

const Patient = (patient) => {
  return (
    <div style={style.patientCard.box}>
      <h2 style={style.patientCard.title}>
        {patient.patient.name}'s dashboard
      </h2>
      <div style={style.patientCard.data}>
        <div style={style.circle} />
        <span style={style.patientCard.namesBirth}>
          <p style={style.patientCard.nameSurname}>
            {patient.patient.name} {patient.patient.surname}
          </p>
          <p style={style.patientCard.birth}>
            Date of birth: {patient.patient.birth}
          </p>
        </span>
      </div>
      <Link
        to={"/my-patients/" + patient.patient.index}
        style={style.patientCard.viewDashboard}
      >
        Click to see dashboard
      </Link>
      <Link
        to={"/my-patients/" + patient.patient.index + "/edit"}
        style={style.patientCard.edit}
      >
        Edit information here
      </Link>
    </div>
  );
};

export default MyPatients;
