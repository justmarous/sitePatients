import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

function Cockpit(props) {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Hey {user.name}!</h1>
    </div>
  );
}

export default Cockpit;
