import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";
import verifyAuthenticationSlice from "../verifyAuthentication/verifyAuthentication";

const rootReducer = combineReducers({
  userAuth: authSlice,
  verifyAuth: verifyAuthenticationSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
