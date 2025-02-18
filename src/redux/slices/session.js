import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
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
