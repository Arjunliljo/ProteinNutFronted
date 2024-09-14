import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice/generalSlice";

export default configureStore({
  reducer: {
    general: generalSlice,
  },
});
