import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectListUser } from "../redux/listUserSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../tools/formSchema";
import { loginformStyles as style } from "../styles/loginformStyles";

function RegisterForm() {
  const dispatch = useDispatch();
  const [noSuchUser, setNoSuchUser] = useState(false);
  const onSubmit = (data) => {
    dispatch(addUser(data));
    console.log(data);
  };

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

  return (
    <form onSubmit={(e) => handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name")} style={style.input} />
      <label>Last name</label>
      <input {...register("surname")} style={style.input} />
      <label>Email</label>
      <input {...register("email")} style={style.input} />
      <label>Password</label>
      <input {...register("password")} style={style.input} type={"password"} />
      <label>Repeat password</label>
      <input {...register("cpassword")} style={style.input} type={"password"} />
      <label>Country</label>
      <input {...register("country")} style={style.input} type={"country"} />
      <label>Phone number</label>
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
