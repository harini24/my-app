import { configureStore, createSlice } from '@reduxjs/toolkit'
import testReducer from './Test'
const store = configureStore({
    reducer: {
        restuarants: testReducer
    }
})


export default store