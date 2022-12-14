import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice';
import eventReducer from './reducers/eventSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            authReducer,
            eventReducer
        },
        devTools: true
    })
}
  
const store = makeStore()

export default store

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
