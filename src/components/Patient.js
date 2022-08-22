import React from "react";
import { useParams } from "react-router-dom";
import { selectPatientsId, selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import shortid from "shortid";

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
  profile: {
    height: "100px",
    borderRadius: "15px",
    boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
    margin: "20px",
  },
  genetics: {
    height: "400px",
    borderRadius: "15px",
    boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
    margin: "20px",
    width: "50%",
  },
  diary: {
    width: "50%",
    height: "400px",
    borderRadius: "15px",
    boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
    margin: "20px",
  },
  secondRow: {
    display: "flex",
    flexDirection: "row",
  },
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
};

function Patient(props) {
  const { index } = useParams();
  const user = useSelector(selectUser);
  const allPatients = useSelector(selectPatientsId);
  const patient = user.patients.filter((e) => e.index === index)[0];

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
    </>
  );
}

const Profile = () => {
  return (
    <div style={style.profile}>
      <button style={style.edit}>Edit patient's profile</button>
    </div>
  );
};

const Genetics = () => {
  return (
    <div style={style.genetics}>
      <button style={style.edit}>Edit genetic information</button>
    </div>
  );
};

const Diary = () => {
  return (
    <div style={style.diary}>
      <button style={style.edit}>Edit diary</button>
    </div>
  );
};

export default Patient;