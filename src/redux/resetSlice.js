import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    resetting: false,
}

export const resetSlice = createSlice({
    name: 'reset',
    initialState,
    reducers:{
        doReset: (state,action)=>{
            return{
                resetting: !state.resetting
            }
        }
    }
})


export const selectResettingState = (state) => state.reset.resetting
export const {doReset} = resetSlice.actions
export default resetSlice.reducer