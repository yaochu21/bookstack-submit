import { createSlice } from "@reduxjs/toolkit";

export const pageDataSlice = createSlice({
  name: "pageData",
  initialState: {
    url: "",
    data: {
      text: "",
      author: "",
      date: "",
      area: "",
      title: "",
      tags: [],
      subtitles: [],
    },
  },
  reducers: {
    setURL: (state, action) => {
      state.url = action.payload;
    },
    setPage: (state, action) => {
      state.data = action.payload;
    },
    clear: (state) => {
      state.data = {
        author: "",
        year: "",
        area: "",
        title: "",
        tags: [],
        subtitles: [],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setURL, setPage, clear } = pageDataSlice.actions;

export default pageDataSlice.reducer;
