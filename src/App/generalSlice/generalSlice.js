import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
  curHomeColor: "#5c8e55",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsHome(state, action) {
      state.isHome = action.payload;
    },
    setCurHomeColor(state, action) {
      state.curHomeColor = action.payload;
    },
  },
});

export const { setIsHome, setCurHomeColor } = generalSlice.actions;
export default generalSlice.reducer;
