import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDna,
  faKey,
  faQuestion,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../redux/userSlice";

const style = {
  logo: {
    top: "20px",
    left: "40px",
    position: "absolute",
    width: "100px",
    height: "50px",
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    fontSize: "20px",
    lineHeight: "10px",
  },
  list: {
    position: "absolute",
    listStyle: "none",
    color: "white",
    top: "100px",
    cursor: "pointer",
    fontSize: "12px",
  },
  listItem: {
    textAlign: "center",
    width: "30px",
    display: "inline-block",
    fontSize: "20px",
    padding: "0 30px",
  },
  burger: {
    position: "absolute",
    color: "white",
    fontSize: "26px",
    right: "37px",
    top: "15px",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  menu: {
    position: "relative",
    display: "fixed",
    width: "250px",
    minWidth: "250px",
    backgroundColor: "green",
    height: "100vh",
    transition: "0.25s",
  },
};

function Menu(props) {
  const iconSupport = <FontAwesomeIcon icon={faQuestion} />;
  const iconMenu = <FontAwesomeIcon icon={faBars} />;
  const iconLogo = <FontAwesomeIcon icon={faDna} />;
  const iconLogOut = <FontAwesomeIcon icon={faKey} />;
  const iconMyPatients = <FontAwesomeIcon icon={faUserPlus} />;

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [menuStyle, setMenuStyle] = useState(style.menu);
  const [hideElements, setHideElements] = useState(false);

  function handleLogOut() {
    console.log("logging out... ");
    dispatch(logOut());
  }

  const AfterLogin = () => {
    return (
      <>
        <Link to={"/my-patients"} style={style.link}>
          <li key={6}>
            <div style={style.listItem}>{iconMyPatients}</div>
            My patients
          </li>
        </Link>
        <Link to={"/"} style={style.link}>
          <li key={5} onClick={() => handleLogOut()}>
            <div style={style.listItem}>{iconLogOut}</div>
            Log out
          </li>
        </Link>
      </>
    );
  };

  function hideMenu() {
    if (menuStyle.width === "250px")
      setMenuStyle({
        ...menuStyle,
        width: "100px",
        minWidth: "0px",
      });
    else setMenuStyle(style.menu);
    setHideElements(!hideElements);
    console.log(menuStyle);
  }

  return (
    <div style={menuStyle}>
      <Link to={"/"} style={style.link}>
        <div style={style.logo} hidden={hideElements}>
          {iconLogo}DEN97{" "}
          <p style={{ fontSize: "9px", color: "black" }}>research unit</p>
        </div>
      </Link>
      <div style={style.burger} onClick={() => hideMenu()}>
        {iconMenu}
      </div>
      <ul style={style.list} hidden={hideElements}>
        <Link to={"/support"} style={style.link}>
          <li key={4}>
            <div style={style.listItem}>{iconSupport}</div> Support
          </li>
        </Link>
        {user.name !== "" ? <AfterLogin /> : null}
      </ul>
    </div>
  );
}

export default Menu;
