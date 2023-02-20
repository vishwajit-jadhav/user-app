import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./features/user/userSlice";


export const rootReducer = combineReducers({
  user: UserReducer,
});
