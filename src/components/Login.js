import React, {useState} from 'react';


let styleInput={
    display: "block",
    width: "100%",
    height: "30px",
    borderRadius: "4px",
    border: "1px solid lightgrey",
};

let styleCheckbox={
    width: "17px",
    height: "17px",
    border: "1px solid grey"
};


let styleLoginWindow = {
    boxSizing: "border-box",
    position: "fixed",
    boxShadow: "0px 1px 20px rgba(0,0,0,0.35)",
    top: "250px",
    zIndex: "2",
    backgroundColor: "white",
    height: "350px",
    right: "80px",
    borderRadius: "15px",
    width: "470px"
}

let styleLoginRegister = {
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
}


let styleRegister ={
    ...styleLoginRegister,
    color: "white",

};
let styleLogin = {
    ...styleLoginRegister,
    right: "0",
    zIndex: "2",
    backgroundColor: "white",


};
let styleInputWindow={
    position: "absolute",
    fontSize: "9px",
    top: "70px",
    justifyContent: "space-around",
    left: "40px",
    fontWeight: "300",
    right: "40px"
    //nie dziala zmiana koloru wtf
};

let styleLoginRegisterParent={
    backgroundColor: "orange",
    zIndex: "3",
    height: "55px",
    borderRadius: "15px 15px 0 0 ",

};

let styleButton={
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
    cursor: "pointer"

};

let styleLink={
    textDecoration:"none",
    display: "block",
    width: "100%",
    textAlign: "center",
};

function Login() {

    return (
        <div style={styleLoginWindow}>
        <div style={styleLoginRegisterParent}>
            <div style={styleRegister}>Register</div>
          <div style={styleLogin}>Sign in here</div>
        </div>
            <div style={styleInputWindow}>
                <p>ENTER YOUR EMAIL</p>
            <input type={"text"} alt={"Enter your email"} style={styleInput}/>
                <p>ENTER YOUR PASSWORD</p>
                <Password/>

                <button style={styleButton}>Sign in</button>
                <a href="" style={styleLink}>I forgot my password</a>

            </div>
        </div>
    );
}


function Password(){

    const [passwordShown, setPasswordShown] = useState(false);

    return(<>
         <input type={passwordShown ? "text" : "password"} alt={"Enter your password"} style={styleInput}/>
            <input type="checkbox" onClick={()=>setPasswordShown(!passwordShown)} style={styleCheckbox}/><span>Show password</span>
        </>
    )
}


export default Login;