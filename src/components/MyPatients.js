import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

const style = {
  patients: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: "50px",
  },
  createBox: {
    height: "200px",
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addPatient: {
    fontSize: "12px",
    display: "border-box",
    border: "1px solid grey",
    padding: "7px 30px",
    borderRadius: "20px",
    color: "grey",
    cursor: "pointer",
  },
  header: {
    width: "100%",
    height: "100px",
    backgroundImage:
      "linear-gradient(to top,rgba(15, 112, 1, 0.25), rgba(255, 255, 255, 1))",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: "20px 40px",
    marginBottom: "40px",
  },
  h1: {
    fontSize: "18px",
    color: "green",
    fontWeight: "700",
  },
  circle: {
    display: "inline-block",
    backgroundColor: "#483D8B",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  patientCard: {
    title: {
      textTransform: "uppercase",
      fontSize: "12px",
      // height: "30px",
    },
    box: {
      height: "200px",
      width: "300px",
      borderRadius: "15px",
      boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
      margin: "20px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    data: {
      fontSize: "12px",
      display: "flex",
      flexDirection: "row",
    },
    nameSurname: {
      color: "#483D8B",
      padding: "0",
      margin: "0",
      display: "inline-block",
      fontWeight: "700",
    },
    birth: {
      margin: "0",
      padding: "0",
      // display: "inline-block",
    },
    namesBirth: {
      display: "flex",
      flexDirection: "column",
    },
    viewDashboard: {
      fontSize: "12px",
      display: "border-box",
      border: "1px solid green",
      padding: "7px 0",
      borderRadius: "20px",
      color: "green",
      cursor: "pointer",
      width: "100%",
      textAlign: "center",
      marginTop: "10px",
    },
    edit: {
      fontSize: "12px",
      display: "border-box",
      border: "1px solid grey",
      padding: "7px 0",
      borderRadius: "20px",
      color: "grey",
      cursor: "pointer",
      width: "100%",
      textAlign: "center",
    },
  },
};

function MyPatients(props) {
  const user = useSelector(selectUser);

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
      <h2 style={style.addPatient}>{iconPlus} Add a new patient</h2>
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
        <span style={style.namesBirth}>
          <p style={style.patientCard.nameSurname}>
            {patient.patient.name} {patient.patient.surname}
          </p>
          <p style={style.patientCard.birth}>
            Date of birth {patient.patient.birth}
          </p>
        </span>
      </div>
      <h2 style={style.patientCard.viewDashboard}>Click to see dashboard</h2>
      <h2 style={style.patientCard.edit}>Edit information here</h2>
    </div>
  );
};

export default MyPatients;
