import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectListUser } from "../redux/listUserSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function RegisterForm() {
  const dispatch = useDispatch();
  const [noSuchUser, setNoSuchUser] = useState(false);
  const onSubmit = (data) => {
    dispatch(addUser(data));
    console.log(data);
  };

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
    login: Yup.string()
      .required("Email address is required")
      .email("must be a valid email"),
  });

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
  let style = {
    input: {
      display: "block",
      width: "100%",
      height: "30px",
      borderRadius: "4px",
      border: noSuchUser ? "2px solid red" : "1px solid lightgrey",
    },
    checkbox: {
      width: "17px",
      height: "17px",
      border: "1px solid grey",
    },
    loginWindow: {
      boxSizing: "border-box",
      position: "fixed",
      boxShadow: "0px 1px 20px rgba(0,0,0,0.35)",
      top: "250px",
      zIndex: "2",
      backgroundColor: "white",
      height: "350px",
      right: "80px",
      borderRadius: "15px",
      width: "470px",
    },
    loginRegister: {
      position: "absolute",
      textTransform: "uppercase",
      fontSize: "15px",
      fontWeight: "500",
      display: "block",
      padding: "20px 0",
      borderRadius: "15px 15px 0 0 ",
      width: "50%",
      textAlign: "center",
      cursor: "pointer",
    },
    inputWindow: {
      position: "absolute",
      fontSize: "9px",
      top: "70px",
      justifyContent: "space-around",
      left: "40px",
      fontWeight: "300",
      right: "40px",
    },
    loginRegisterParent: {
      backgroundColor: "orange",
      zIndex: "3",
      height: "55px",
      borderRadius: "15px 15px 0 0 ",
    },
    link: {
      textDecoration: "none",
      display: "block",
      textAlign: "center",
      cursor: "pointer",
    },
    checkLogin: {
      color: "red",
      fontWeight: "400",
      position: "absolute",
    },
  };

  return (
    <form onSubmit={(e) => handleSubmit(onSubmit)}>
      <p>Name</p>
      <input {...register("name")} style={style.input} />
      <p>Last name</p>
      <input {...register("surname")} style={style.input} />
      <p>Email</p>
      <input {...register("login")} style={style.input} />
      <p>Password</p>
      <input {...register("password")} style={style.input} type={"password"} />
      <p>Repeat password</p>
      <input {...register("cpassword")} style={style.input} type={"password"} />
      <p>Country</p>
      <input {...register("country")} style={style.input} type={"country"} />
      <p>Phone number</p>
      <input {...register("telephone")} style={style.input} type={"phone"} />

      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        style={style.button}
      >
        Create account
      </button>
      <p style={{ color: "red", fontSize: "12px" }}>{errors.login?.message}</p>
      <p style={{ color: "red", fontSize: "12px" }}>
        {errors.password?.message}
      </p>
      <p style={{ color: "red", fontSize: "12px" }}>
        {errors.cpassword?.message}
      </p>
    </form>
  );
}

export default RegisterForm;
