import { configureStore } from "@reduxjs/toolkit"; 

import TaskReducer from './reducers/tasks'

const store = configureStore({
    reducer:{
        tasks: TaskReducer

    }

})


export type RootReducer = ReturnType<typeof store.getState>

export default store;