import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slices/trainernam.slice'

const store = configureStore({
    reducer:{
        trainerName
    }
})

export default store