import React from "react";
import "../css/logregbuttons.css";
import { Link  } from "react-router-dom";
import { logout } from '../Reducers/userReducer'
import { useDispatch } from "react-redux";

export function LogRegButtons() {
    return(
            <div className="buttons">
                <Link to="/login" className="bLR">Sign In</Link>
                <Link to="/registration" className="bLR">Sign Up</Link>
            </div>
    )
}

export function LogoutButton() {
    const dispatch = useDispatch()

    return(
            <div className="buttons">
                 <Link to="/" className="bLR">
                    <text onClick={() => dispatch(logout())} >
                        Logout
                    </text>
                </Link>
            </div>
    )
}