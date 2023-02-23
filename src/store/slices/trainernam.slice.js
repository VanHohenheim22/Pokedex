import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
    name: "nameTrainer",
    initialState: "",

    reducers: {
        setTrainerName: ( state, action,  ) => action.payload
    }
})

export const { setTrainerName } = nameTrainerSlice.actions
export default nameTrainerSlice.reducer