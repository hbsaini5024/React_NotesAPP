import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./slices/NoteSlice";

export const Store = configureStore({
    reducer:{
        noteReducer:NoteSlice
    }
});