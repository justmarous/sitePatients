export const myPatientsStyles = {
  patients: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: "50px",
  },
  createBox: {
    height: "200px",
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addPatient: {
    fontSize: "12px",
    display: "border-box",
    border: "1px solid grey",
    padding: "7px 30px",
    borderRadius: "20px",
    color: "grey",
    cursor: "pointer",
    textDecoration: "none",
  },
  header: {
    width: "100%",
    height: "100px",
    backgroundImage:
      "linear-gradient(to top,rgba(15, 112, 1, 0.25), rgba(255, 255, 255, 1))",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: "20px 40px",
    marginBottom: "40px",
  },
  h1: {
    fontSize: "18px",
    color: "green",
    fontWeight: "700",
  },
  circle: {
    display: "inline-block",
    backgroundColor: "#483D8B",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  patientCard: {
    title: {
      textTransform: "uppercase",
      fontSize: "12px",
      // height: "30px",
    },
    box: {
      height: "200px",
      width: "300px",
      borderRadius: "15px",
      boxShadow: "0px 3px 7px rgba(0,150,0,0.35)",
      margin: "20px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    data: {
      fontSize: "12px",
      display: "flex",
      flexDirection: "row",
    },
    nameSurname: {
      color: "#483D8B",
      padding: "0",
      margin: "0",
      display: "inline-block",
      fontWeight: "700",
    },
    birth: {
      margin: "0",
      padding: "0",
      // display: "inline-block",
    },
    namesBirth: {
      display: "flex",
      flexDirection: "column",
    },
    viewDashboard: {
      fontSize: "12px",
      display: "border-box",
      border: "1px solid green",
      padding: "7px 0",
      borderRadius: "20px",
      color: "green",
      cursor: "pointer",
      width: "100%",
      textAlign: "center",
      marginTop: "10px",
      textDecoration: "none",
    },
    edit: {
      fontSize: "12px",
      display: "border-box",
      border: "1px solid grey",
      padding: "7px 0",
      borderRadius: "20px",
      color: "grey",
      cursor: "pointer",
      width: "100%",
      textAlign: "center",
      textDecoration: "none",
    },
  },
};