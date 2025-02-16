import { createSlice } from "@reduxjs/toolkit";

const allKeys = Object.keys(localStorage);
const sessionKey = allKeys.find((key) => key.includes("auth-token"));

const initialState = {
  data: JSON.parse(localStorage.getItem(sessionKey)) || null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSession } = sessionSlice.actions;

export default sessionSlice.reducer;
