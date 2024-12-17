import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../../features/sign-in/model/authSlice";
import { profileTabReducer } from "../../features/profile-tab/model";

export const rootReducer = combineReducers({
  auth: authReducer,
  profileTab: profileTabReducer,
});
