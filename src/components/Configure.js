import React, { useState } from "react";
import { loginformStyles } from "../styles/loginformStyles";

const style = {
  h1: {
    fontSize: "20px",
    padding: "0 30px",
    fontWeight: "600",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 30px",
  },
  h2: {
    fontSize: "17px",
    padding: "10px 30px",
  },
  input: {},
  button: {
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
  },
};

function Configure(props) {
  const [showForm, setShowForm] = useState(true);
  return (
    <>
      {" "}
      <h1 style={style.h1}>Your data</h1>
      <section style={style.section}>
        <div style={style.data}>
          <h2 style={style.h2}>Name</h2>
          <h2 style={style.h2}>Surname</h2>
          <h2 style={style.h2}>Email</h2>
          <h2 style={style.h2}>Phone</h2>
          <h2 style={style.h2}>Country</h2>
        </div>
        {showForm ? <EditForm /> : <UserData />}
      </section>
      <button onClick={() => setShowForm(true)} style={style.button}>
        Change data
      </button>
    </>
  );
}

const UserData = () => {
  return (
    <div style={style.data}>
      <h2 style={style.h2}>Name</h2>
      <h2 style={style.h2}>Surname</h2>
      <h2 style={style.h2}>Email</h2>
      <h2 style={style.h2}>Phone</h2>
      <h2 style={style.h2}>Country</h2>
    </div>
  );
};

const EditForm = () => {
  // const formStyle = loginformStyles;

  return <div style={style.data}>adklajsdljdas</div>;
};

export default Configure;
