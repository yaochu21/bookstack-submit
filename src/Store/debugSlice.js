import { createSlice } from "@reduxjs/toolkit";

export const debugSlice = createSlice({
    name: "debugger",
    initialState: {
        api_process: "https://bookstack.laodongqushi.com/process",
        api_publish: "https://bookstack.laodongqushi.com/publish"
        // api_process: "http://127.0.0.1:5000/process",
        // api_publish: "http://127.0.0.1:5000/publish"
    },
    reducers: {}
});

export default debugSlice.reducer;
