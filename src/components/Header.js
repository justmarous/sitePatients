import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../redux/userSlice";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useHistory, useNavigate } from "react-router-dom";
import SplitButton from "react-bootstrap/SplitButton";

function Header(props) {
  const { name, surname } = useSelector(selectUser);
  const dispatch = useDispatch();

  const iconGlobe = (
    <FontAwesomeIcon style={{ color: "green" }} icon={faGlobe} />
  );
  const iconArrow = (
    <FontAwesomeIcon style={{ color: "grey" }} icon={faArrowTurnDown} />
  );

  const style = {
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "60px",
      justifyContent: "flex-end",
      padding: "0 30px",
      backgroundColor: "white",
      fontSize: "20px",
    },
    item: {
      margin: "30px",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
  };

  function SplitVariantExample() {
    return (
      <>
        <SplitButton
          key={"Warning"}
          id={`dropdown-split-variants-${"Warning"}`}
          variant={"Warning"}
          title={"Warning"}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>
      </>
    );
  }

  const AfterLogin = () => {
    return (
      <SplitButton
        key={"warning"}
        id={`dropdown-split-variants-warning`}
        variant={"warning"}
        title={name}
      >
        <Dropdown.Item eventKey="1">
          <Link style={style.link} to={"/configure"}>
            Configure
          </Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2" onClick={() => dispatch(logOut())}>
          <Link style={style.link} to={"/"}>
            Log out
          </Link>
        </Dropdown.Item>
      </SplitButton>
    );
  };

  return (
    <div style={style.header}>
      <div style={style.item}>
        {iconGlobe} En {iconArrow}
      </div>
      {name !== "" ? <AfterLogin /> : null}
    </div>
  );
}

export default Header;
