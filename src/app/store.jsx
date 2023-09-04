import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../features/jobs/JobsSlice';

const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    }
});

export default store;