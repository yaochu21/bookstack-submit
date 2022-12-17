import { configureStore } from "@reduxjs/toolkit";
import pageDataReducer from "./pageDataSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: { pageData: pageDataReducer, auth: authReducer },
});
