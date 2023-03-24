import React from "react";
import "../css/logregbuttons.css";
import { Link } from "react-router-dom";

function LogRegButtons() {
    return(
        <div className="buttons">
            <Link to="/login" class="button" className="bLR">Sign In</Link>
            <Link to="/registration" class="button" className="bLR">Sign Up</Link>
        </div>
    )
}

export default LogRegButtons;