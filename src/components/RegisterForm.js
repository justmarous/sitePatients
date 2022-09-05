import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/listUserSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../utils/formSchema";
import { loginformStyles as style } from "../styles/loginformStyles";
import { switchForm } from "../redux/registerFormSlice";

function RegisterForm() {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addUser(data));
    dispatch(switchForm(true));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      <input {...register("login")} style={style.input} />
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
