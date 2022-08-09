export let loginformStyles = {
  input: {
    display: "block",
    width: "100%",
    height: "30px",
    borderRadius: "4px",
    // border:      !noSuchUser || registerForm ? "1px solid lightgrey" : "2px solid red",
    border: "1px solid lightgrey",
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
    // height: !registerForm ? "350px" : "700px",
    height: "700px",
    textTransform: "uppercase",
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
    transition: "0.3",
  },
  button: {
    width: "50%",
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
