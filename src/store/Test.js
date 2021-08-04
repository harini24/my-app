import { createSlice } from "@reduxjs/toolkit"
const initialState = { restaurants: [] }

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
        getRestaurants: (state, action) => {
            state.restaurants = action.payload
            console.log(state.restaurants)
        }
    }
})

export const restuarantActions = restaurantSlice.actions
export default restaurantSlice.reducer