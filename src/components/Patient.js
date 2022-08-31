import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { selectUser } from "../redux/userSlice";
import { selectCurrentUser, selectPatientsId } from "../redux/listUserSlice";
import { useSelector } from "react-redux";
import shortid from "shortid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { patientProfileStyles as style } from "../styles/patientProfileStyles";

function Patient(props) {
  const { index } = useParams();
  const user = useSelector(selectCurrentUser);
  const allPatients = useSelector(selectPatientsId);
  const patient = user.patients.filter((e) => e.index === index)[0];
  const iconBack = <FontAwesomeIcon icon={faBackward} />;

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
    const [genetics, setGenetics] = useState(patient.genetics);

    return (
      <div style={style.genetics.box}>
        <div style={style.titles}>
          <div style={style.circle} />
          Genetic information
        </div>
        <button style={style.genetics.edit}>Edit genetic information</button>
        <input
          type="text"
          value={genetics}
          onChange={(e) => setGenetics(e.target.value)}
        />
      </div>
    );
  };

  const Diary = () => {
    return (
      <div style={style.diary.box}>
        <div style={style.titles}>
          <div style={style.circle} />
          Seizure dairy
        </div>
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
