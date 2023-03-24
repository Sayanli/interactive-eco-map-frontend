import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware]
});