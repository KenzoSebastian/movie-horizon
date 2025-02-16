import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/session";

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

export default store;
