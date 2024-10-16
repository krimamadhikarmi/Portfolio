'use client';
import ProjectReducer from "../reducers/ProjectReducers"
import { createStore } from "redux";

const store = createStore(ProjectReducer)



export default store;