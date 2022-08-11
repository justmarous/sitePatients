import React, { useState } from "react";
import { loginformStyles } from "../styles/loginformStyles";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../tools/formSchema";

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
    padding: "12px 10px 12px 30px",
  },
  input: {
    margin: "10px 30px",
    fontSize: "17px",
  },
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
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <>
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
      <button onClick={() => handleClick()} style={style.button}>
        {!showForm ? "Sumbit Change" : "Change data"}
      </button>
    </>
  );
}

const UserData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const user = useSelector(selectUser);
  return (
    <form style={style.data}>
      <input {...register("name")} style={style.input} />
      <input style={style.input} {...register("surname")} />
      {user.surname}
      <input style={style.input} {...register("email")} />
      {user.login}
      <input style={style.input} {...register("telephone")} />
      {user.telephone}
      <input style={style.input} {...register("country")} />
      {user.country}
    </form>
  );
};

const EditForm = () => {
  return <div style={style.data}></div>;
};

export default Configure;
