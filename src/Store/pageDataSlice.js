import { createSlice } from "@reduxjs/toolkit";

export const pageDataSlice = createSlice({
  name: "pageData",
  initialState: {
    url: "",
    data: {
      text: "",
      title: "",
      author: [""],
      date: "",
      area: "",
      rtype: [""],
      tags: [""],
      subtitles: [],
      imgs: [
        {
          url: "https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d",
          valid: true,
          id: 0,
        },

        {
          url: "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_square.jpg",
          valid: true,
          id: 1,
        },
        {
          url: "https://freshpet.com/wp-content/uploads/2019/09/house-cat-281511_640.jpg",
          valid: true,
          id: 2,
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Gdp_per_capita_of_the_administrative_division_in_China.png",
          valid: true,
          id: 3,
        },
      ],
      segments: [],
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
        text: "",
        title: "",
        author: [""],
        date: "",
        area: "",
        rtype: [""],
        tags: [""],
        subtitles: [""],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setURL, setPage, clear } = pageDataSlice.actions;

export default pageDataSlice.reducer;
