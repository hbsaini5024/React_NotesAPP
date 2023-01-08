import { createSlice } from "@reduxjs/toolkit";

const NoteSlice = createSlice({
    name:'noteSlice',
    initialState:{
        notes:[]
    },
    reducers:{
        addNote:(state,action)=>{
            state.notes = [...state.notes,action.payload];
        },
        delNote:(state,action)=>{
            state.notes = state.notes.filter((value)=>value.id !== action.payload);
        },
        updateNote:(state,action)=>{
            state.notes = state.notes.map((value)=>value.id === action.payload.id ? action.payload:value);
        }
    }
})

export default NoteSlice.reducer;

export const {addNote,delNote,updateNote} = NoteSlice.actions;