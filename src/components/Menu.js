import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBurger,
    faCross,
    faFileCircleQuestion, faGripHorizontal,
    faHamburger,
    faHandsHelping,
    faPerson, faQuestion
} from '@fortawesome/free-solid-svg-icons'

function Menu(props) {

    const icon1 = <FontAwesomeIcon icon={faQuestion} />
    const icon2 = <FontAwesomeIcon icon={faPerson} />
    const icon3 = <FontAwesomeIcon icon={faGripHorizontal} />


    const styleMenu = {
        position: "relative",
        display: "fixed",
        width: "250px",
        minWidth: "250px",
        backgroundColor: "green",
        height: "100vh",
    }


    const styleLogo = {
        top: "10px",
        left: "40px",
        position: "absolute",
        width: "100px",
        height: "50px",
        backgroundColor: "#2FF",
        cursor:"pointer"

    }

    const styleList = {
        position: "absolute",
        listStyle: "none",
        color: "white",
        top: "60px",
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

            <div style={styleLogo}> </div>
            <div style={styleBurger}>{icon3}</div>

            <ul style={styleList}>
                <li key={3}><div style={styleListItem}>{icon2}</div> Patients</li>
                <li key={4}><div style={styleListItem}>{icon1}</div> Support</li>
            </ul>
        </div>
    );
}

export default Menu;