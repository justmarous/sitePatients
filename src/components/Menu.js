import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBurger,
    faCross, faDna,
    faFileCircleQuestion, faGripHorizontal,
    faHamburger,
    faHandsHelping,
    faPerson, faQuestion
} from '@fortawesome/free-solid-svg-icons'

function Menu(props) {

    const icon1 = <FontAwesomeIcon icon={faQuestion} />
    const icon2 = <FontAwesomeIcon icon={faPerson} />
    const icon3 = <FontAwesomeIcon icon={faGripHorizontal} />
    const icon4 = <FontAwesomeIcon icon={faDna} />



    const styleMenu = {
        position: "relative",
        display: "fixed",
        width: "250px",
        minWidth: "250px",
        backgroundColor: "green",
        height: "100vh",
    }


    const styleLogo = {
        top: "20px",
        left: "40px",
        position: "absolute",
        width: "100px",
        height: "50px",
        cursor:"pointer",
        textAlign: "center",
        color: "white",
        fontSize: "20px",
        lineHeight: "10px"
    }

    const styleList = {
        position: "absolute",
        listStyle: "none",
        color: "white",
        top: "100px",
        cursor:"pointer",
        fontSize: "12px"
    }


    const styleListItem = {
        textAlign:"center",
        width: "30px",
        display: "inline-block",
        fontSize: "20px",
    }


    const styleBurger = {
        position: "absolute",
        color: "white",
        fontSize: "40px",
        right: "30px",
        cursor:"pointer"
    }


    return (
        <div style={styleMenu}>

            <div style={styleLogo}>{icon4}DEN97 <p style={{fontSize: "9px", color: "black"}}>research unit</p></div>
            <div style={styleBurger}>{icon3}</div>

            <ul style={styleList}>
                {/*<li key={3}><div style={styleListItem}>{icon2}</div> Patients</li>*/}
                <li key={4}><div style={styleListItem}>{icon1}</div> Support</li>
            </ul>
        </div>
    );
}

export default Menu;