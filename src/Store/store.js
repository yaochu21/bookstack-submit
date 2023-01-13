import { configureStore } from "@reduxjs/toolkit";
import pageDataReducer from "./pageDataSlice";
import authReducer from "./authSlice";
import stepControlReducer from "./stepControlSlice";

export default configureStore({
  reducer: {
    pageData: pageDataReducer,
    auth: authReducer,
    stepControl: stepControlReducer,
  },
});
