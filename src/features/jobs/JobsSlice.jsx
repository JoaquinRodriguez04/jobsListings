import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    jobsArr: [],
    filters: [],
    filteredJobs: [],
};

const JobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            const jobs = action.payload;

            return {
                ...state,
                jobsArr: jobs,
            }
        },
        setRole: (state, action) => {
            const newRole = action.payload;

            const filteredJobsRole = state.jobsArr.filter((job) => job.role === newRole);
            const newFilterRole = state.filters.includes(newRole)
                ? state.filters
                : [...state.filters, newRole];

            return {
                ...state, 
                filteredJobs: filteredJobsRole, 
                filters: newFilterRole,
            };
        },
        setLevel: (state, action) => {
            const newLevel = action.payload;

            const filteredJobsLevel = state.jobsArr.filter((job) => job.level === newLevel); 
            const newFilterLevel = state.filters.includes(newLevel)
                ? state.filters
                : [...state.filters, newLevel];

            return {
                ...state, 
                filteredJobs: filteredJobsLevel, 
                filters: newFilterLevel,
            };
        }, 
        setLang: (state, action) => {
            const newLang = action.payload;

            const filteredJobsLang = state.jobsArr.filter((job) => 
                job.languages.includes(newLang)); 
            const newFilterLang = state.filters.includes(newLang)
                ? state.filters
                : [...state.filters, newLang];
                
            return {
                ...state, 
                filteredJobs: filteredJobsLang, 
                filters: newFilterLang,
            };
        },
        setTools: (state, action) => {
            const newTools = action.payload;

            const filteredJobsTools = state.jobsArr.filter((job) => 
            job.tools.includes(newTools)); 
            const newFilterTools = state.filters.includes(newTools)
                ? state.filters
                : [...state.filters, newTools]

            return {
                ...state, 
                filteredJobs: filteredJobsTools, 
                filters: newFilterTools,
            };
        },  
        removeFilters: (state, action) => {
            const filterRemove = action.payload; 
            let updateFilteredJobs = state.jobsArr; 
            
            const removefilterSelected = state.filters.filter((filter) => filter !== filterRemove);
            
            if (removefilterSelected.length === 0) {
                updateFilteredJobs = state.jobsArr;
            } else {
                updateFilteredJobs = state.jobsArr.filter((job) => (
                    removefilterSelected.includes(job.role)|| 
                    removefilterSelected.includes(job.level)||  
                    removefilterSelected.includes(job.languages)|| 
                    removefilterSelected.includes(job.tools)
                ));
            };

            return {
              ...state,
              filteredJobs: updateFilteredJobs,
              filters: removefilterSelected,
            };

        },
        emptyFilters: (state) => {
            return {
                ...state,
                filteredJobs: state.jobsArr,
                filters: initialState.filters,
            }
        },
    }
});

export const { 
    setJobs, 
    setRole, 
    setLevel, 
    setLang, 
    setTools, 
    removeFilters, 
    emptyFilters 
} = JobsSlice.actions;

export default JobsSlice.reducer;