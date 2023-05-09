"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface authState {
    token: string | null
}

const initialState = {
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, {payload}) => {
            state.token = payload.body.token
        }
    }
})

export const {loginSuccess} = authSlice.actions;
export default authSlice.reducer;