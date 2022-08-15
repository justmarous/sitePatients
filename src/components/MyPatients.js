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
    weight: "200",
    display: "border-box",
    border: "1px solid grey",
    padding: "7px 30px",
    borderRadius: "20px",
    color: "grey",
    cursor: "pointer",
  },
};

function MyPatients(props) {
  const user = useSelector(selectUser);

  console.log("mypatients");
  return (
    <>
      <div>
        <h1>Welcome to the Den 97 Patient Centre</h1>
      </div>
      <section style={style.patients}>
        <NewPatient />
        {}
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

export default MyPatients;
