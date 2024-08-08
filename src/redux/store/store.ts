import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";
import verifyAuthenticationSlice from "../verifyAuthentication/verifyAuthentication";
import userDataSlice from "../userDataSlice/userDataSlice";
import AddEventsSlice from "../AddEventsSlice/AddEventsSlice";
import eventByUserIdSlice from "../eventByUserIdSlice/eventByUserIdSlice";
import allUsersEventsSlice from "../allEventsSlice/allEventsSlice";

const rootReducer = combineReducers({
  userAuth: authSlice,
  verifyAuth: verifyAuthenticationSlice,
  userInfo: userDataSlice,
  addEvent: AddEventsSlice,
  eventByUserId: eventByUserIdSlice,
  allEvents: allUsersEventsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
