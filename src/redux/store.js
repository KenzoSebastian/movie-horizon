import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/session";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

export default store;
