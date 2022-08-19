import React from "react";
import { useParams } from "react-router-dom";
import { selectPatientsId, selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import shortid from "shortid";

function Patient(props) {
  const { index } = useParams();
  const user = useSelector(selectUser);
  const allPatients = useSelector(selectPatientsId);
  const patient = user.patients.filter((e) => e.index === index)[0];

  return (
    <>
      <h1>{index}</h1>
      <h2>{patient.name} </h2>

      <p>Patients of this user:</p>
      <ul>
        {allPatients.map((e) => (
          <li key={shortid.generate()}>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default Patient;
