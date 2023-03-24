import React, {useState} from 'react';
import "../../css/auth.css";
import { registration } from "../../Actions/user";
import { useDispatch, useSelector } from "react-redux"
import Input from "../../utils/Input";
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()



    if (useSelector(state => state.user.isAuth)) {
      console.log("isAuth");
      return <Navigate to={"/"} />
    }

    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <div className="text-center">
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <Input
                  type="email"
                  value={email}
                  setValue={setEmail}
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <Input
                  type="password"
                  value={password}
                  setValue={setPassword}
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" onClick={() => dispatch(registration(email, registration))} type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      )
}