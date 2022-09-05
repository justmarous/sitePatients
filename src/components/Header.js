import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../redux/userSlice";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import SplitButton from "react-bootstrap/SplitButton";

function Header() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

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

  const AfterLogin = () => {
    return (
      <SplitButton
        key={"warning"}
        id={`dropdown-split-variants-warning`}
        variant={"warning"}
        title={name}
      >
        <Dropdown.Item eventKey="1" as={Link} to={"/configure"}>
          <div style={{ width: "100%" }}>Configure</div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2" as={Link} to={"/"}>
          <div style={{ width: "100%" }} onClick={() => dispatch(logOut())}>
            Log out
          </div>
        </Dropdown.Item>
      </SplitButton>
    );
  };

  return <div style={style.header}>{name !== "" ? <AfterLogin /> : null}</div>;
}

export default Header;
