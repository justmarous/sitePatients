import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowDown,
    faArrowDown91, faArrowTurnDown,
    faArrowUp,
    faGlobe,
    faHandsHelping,
    faPerson
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {

    const iconGlobe = <FontAwesomeIcon style={{color: "green"}} icon={faGlobe} />
    const iconArrow = <FontAwesomeIcon style={{color: "grey"}} icon={faArrowTurnDown} />

const styleHeader = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "60px",
    justifyContent: "flex-end",
    padding: "0 30px",
    backgroundColor: "white",
    fontSize: "20px"
}

const headerItem = {
    margin: "30px",
    cursor: "pointer"
}




    return (
        <div style={styleHeader}>
            <div style={headerItem}>{iconGlobe} En {iconArrow}</div>
        </div>
    );
}

export default Header;