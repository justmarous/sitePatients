import React from "react";
import { Link, useParams } from "react-router-dom";
import { selectUser } from "../redux/userSlice";
import { selectCurrentUser, selectPatientsId } from "../redux/listUserSlice";
import { useSelector } from "react-redux";
import shortid from "shortid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const style = {
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
  main: {
    display: "flex",
    flexDirection: "column",
  },

  secondRow: {
    display: "flex",
    flexDirection: "row",
  },
  genetics: {
    edit: {
      fontSize: "12px",
      display: "border-box",
      border: "1px solid grey",
      padding: "7px 0",
      borderRadius: "20px",
      color: "grey",
      cursor: "pointer",
      width: "240px",
      textAlign: "center",
      margin: "10px",
      backgroundColor: "white",
    },
    box: {
      width: "50%",
      height: "400px",
      borderRadius: "15px",
      boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
      margin: "20px",
    },
  },
  diary: {
    edit: {
      fontSize: "12px",
      display: "border-box",
      border: "1px solid grey",
      padding: "7px 0",
      borderRadius: "20px",
      color: "grey",
      cursor: "pointer",
      width: "240px",
      textAlign: "center",
      margin: "10px",
      backgroundColor: "white",
    },
    box: {
      height: "400px",
      borderRadius: "15px",
      boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
      margin: "20px",
      width: "50%",
    },
  },
  profile: {
    edit: {
      fontSize: "12px",
      display: "block",
      boxSizing: "border-box",
      border: "1px solid grey",
      padding: "7px 0",
      borderRadius: "20px",
      color: "grey",
      cursor: "pointer",
      width: "240px",
      textAlign: "center",
      margin: "10px",
      backgroundColor: "white",
      textDecoration: "none",
    },
    box: {
      height: "100px",
      borderRadius: "15px",
      boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
      margin: "20px",
    },
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

function Patient(props) {
  const { index } = useParams();
  const user = useSelector(selectCurrentUser);
  const allPatients = useSelector(selectPatientsId);
  const patient = user.patients.filter((e) => e.index === index)[0];

  const iconBack = <FontAwesomeIcon icon={faBackward} />;

  const Profile = () => {
    return (
      <div style={style.profile.box}>
        <Link style={style.profile.edit} to={"/my-patients/" + index + "/edit"}>
          Edit patient's profile
        </Link>
      </div>
    );
  };

  const Genetics = () => {
    return (
      <div style={style.genetics.box}>
        <button style={style.genetics.edit}>Edit genetic information</button>
      </div>
    );
  };

  const Diary = () => {
    return (
      <div style={style.diary.box}>
        <button style={style.diary.edit}>Edit diary</button>
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
      {allPatients.indexOf(index) !== -1 ? (
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
