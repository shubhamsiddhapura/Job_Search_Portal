import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    job : null,
    editJob : false,
    apply : false
}

const jobSlice = createSlice({
    name:"job",
    initialState: initialState,
    reducers : {
        setJob(state, value){
            state.job = value.payload;
        },
        setEditJob(state, value){
            state.editJob = value.payload;
        },
        setApply(state, value){
            state.apply = value.payload;
        }
    }
}) ;

export const {setApply, setEditJob, setJob} = jobSlice.actions
export default jobSlice.reducer