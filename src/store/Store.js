import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice'
const Store = configureStore({
    reducer : {
        user : userReducer
    }
})

export default Store;