import React from "react";
import "../css/logregbuttons.css";
import { Link, redirect } from "react-router-dom";
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
                <button onClick={() => dispatch(logout(), window.location.reload())} className="bLR">Logout</button>
            </div>
    )
}