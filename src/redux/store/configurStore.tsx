'use client';
import ProjectReducer from "../reducers/ProjectReducers"
import { createStore } from "redux";

const store = createStore(ProjectReducer)

export type RootState = ReturnType<typeof store.getState>;

export default store;