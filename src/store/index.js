import { createSlice } from '@reduxjs/toolkit'
import { createStore } from 'redux'


const initialState = { counter: 0, showCounter: true }

createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        }
    }
})
const counterReducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === 'increment') {
        console.log("in increment")
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'increase') {
        console.log("in increment")
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state
}
const store = createStore(counterReducer)

export default store