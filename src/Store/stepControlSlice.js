import { createSlice } from "@reduxjs/toolkit";

export const stepControlSlice = createSlice({
    name: "stepControl",
    initialState: {
      step: 0
    },
    reducers: {
      setStep: (state, action) => {
        state.step = action.payload;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setStep } = stepControlSlice.actions;
  
  export default stepControlSlice.reducer;