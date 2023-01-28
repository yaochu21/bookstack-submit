import { createSlice } from "@reduxjs/toolkit";

export const debugSlice = createSlice({
    name: "debugger",
    initialState: {
        // api: "https://bookstack.laodongqushi.com/process"
        api: "http://127.0.0.1:5000/process"
    },
    reducers: {}
});

export default debugSlice.reducer;
