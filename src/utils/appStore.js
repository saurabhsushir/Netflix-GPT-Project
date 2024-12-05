import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"


const appStore = configureStore({
    reducer:{
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config: configReducer,
    },
})

export default appStore;