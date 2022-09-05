import React from "react";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeEurope,
  faPen,
  faPlantWilt,
} from "@fortawesome/free-solid-svg-icons";
import { selectResettingState } from "../redux/resetSlice";
import { useSelector } from "react-redux";
import ResetPassword from "./ResetPassword";
import { selectUser } from "../redux/userSlice";
import MyPatients from "./MyPatients";

function Landing() {
  const user = useSelector(selectUser);

  let iconStyle = {
    padding: "0 20px",
  };

  const isResetting = useSelector(selectResettingState);

  const iconPen = <FontAwesomeIcon style={iconStyle} icon={faPen} />;
  const iconGlobe = <FontAwesomeIcon style={iconStyle} icon={faGlobeEurope} />;
  const iconGrowth = <FontAwesomeIcon style={iconStyle} icon={faPlantWilt} />;

  const styleLandingSection = {
    height: "500px",
    color: "white",
    fontSize: "15px",
    backgroundColor: "green",
    width: "100%",
    position: "relative",
  };
  const stylePicture = {
    backgroundImage:
      "linear-gradient(to right,rgba(0, 128, 0, 0.8), rgba(15, 112, 1, 0.25)),url(https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)",
    position: "absolute",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    zIndex: "1",
    width: "100%",
  };
  const styleText = {
    position: "absolute",
    opacity: "100",
    zIndex: "2",
    width: "50%",
    padding: " 0 20px 20px 20px",
  };
  const styleList = {
    listStyle: "none",
  };

  const style = {
    blur: {
      width: "100%",
      zIndex: "1",
      minWidth: "1000px",
      transition: "0.1s",
      filter: !isResetting ? "blur(0)" : "blur(10px)",
    },
  };

  return (
    <>
      {isResetting && <ResetPassword style={{ zIndex: "2" }} />}
      <div style={style.blur} hidden={user.name !== ""}>
        <section style={styleLandingSection}>
          <div style={stylePicture} />
          <div style={styleText}>
            <h1 style={{ fontSize: "40px" }}>DEN97 Patient Data Center</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              hic in rem temporibus unde ut. Deleniti ea eaque harum ipsa ipsam
              magni maxime necessitatibus odio odit quaerat, sequi, tempore,
              voluptatem.
            </p>
            <h2>What's inside:</h2>
            <ul style={styleList}>
              <li key={1}> {iconPen} Patient registry</li>
              <li key={2}> {iconGrowth} Digital natural history study</li>
              <li key={3}> {iconGlobe} Critical Survey</li>
            </ul>
          </div>
        </section>
        <Login />
      </div>
      {user.name && <MyPatients />}
    </>
  );
}

export default Landing;
