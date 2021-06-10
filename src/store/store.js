import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "../toolkitRedux/toolkitSlice";


const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducer
})
