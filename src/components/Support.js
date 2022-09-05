import React from "react";

function Support() {
  const style = {
    content: {
      height: "500px",
      color: "white",
      fontSize: "15px",
      backgroundColor: "green",
      opacity: "0.5",
      padding: "0 50px",
    },
    support: {
      display: "flex",
      flexDirection: "column",
    },
    menu: {
      display: "inline-block",
    },
    main: {
      display: "flex",
      flexDirection: "row",
    },
    p: {
      display: "block",
      width: "80%",
    },

    h2: {
      color: "orange",
    },
  };

  return (
    <section style={style.content}>
      <h1>To log in, use credentials:</h1>
      <h2 style={style.h2}>Login: user@gmail.com</h2>
      <h2 style={style.h2}>Password: qwerty1</h2>

      <h1>Security</h1>
      <p style={style.p}>
        All the user data are held inside the store of the App - the goal was
        not to create secure solution for handling user data, as it is not the
        point of my interest, but to mimic behaviour of using such webpage.
      </p>
      <p>All new user data will be erased after refresh.</p>
    </section>
  );
}

export default Support;
