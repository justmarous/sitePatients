import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"
import resetReducer from "./resetSlice";
import userReducer from "./userSlice"
import listUserReducer from "./listUserSlice"



const middlewares = [logger]

const store = configureStore({
    reducer: {
        reset: resetReducer,
        user: userReducer,
        listUser: listUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...middlewares)
})



export default store;

// I'm assuming you're using our official Redux Toolkit package and its createSlice API.
//     createSlice uses Immer internally, which wraps your data in a Proxy so it can track attempted updates.
//     You need to use the current utility from Immer to unwrap the data if you want to log it, as re-exported by RTK:
//     console.log(current(state))