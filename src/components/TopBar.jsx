import React from 'react'
import "./TopBar.css";

import SpeedIcon from '@material-ui/icons/Speed';

function TopBar() {
    return (
        <div className="TopBar">
         <h1 className="titleText">Typometer<SpeedIcon fontSize="inherit"/></h1>
        </div>
    )
}

export default TopBar;
