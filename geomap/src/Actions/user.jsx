import axios from 'axios'
import { setUser } from '../Reducers/userReducer'

const baseUrl = "http://localhost:8080"

export const registration = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(baseUrl + "/api/auth/registration", {
                email,
                password
            })
            dispatch(login(email, password))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const login = (email, password) => {

    return async dispatch => {
        try {
            const response = await axios.post(baseUrl + "/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.message))
            localStorage.setItem('token', response.data.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}