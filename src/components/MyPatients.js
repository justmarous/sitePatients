import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

function MyPatients(props) {
  const user = useSelector(selectUser);

  console.log("mypatients");
  return (
    <div>
      <h1>My patients</h1>
    </div>
  );
}

export default MyPatients;
