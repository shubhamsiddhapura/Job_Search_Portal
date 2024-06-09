import { combineReducers } from "@reduxjs/toolkit";
import authReducer from'../slices/authSlice';
import profileReducer from '../slices/profileSlice'
import jobReducer from '../slices/jobSlice'

export const rootReducer = combineReducers({
    auth : authReducer,
    profile : profileReducer,
    job : jobReducer
});

export default rootReducer;