'use client';
import { SET_TAG } from '../action/ProjectAction';

const initialState = {
  tag: 'All',
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    default:
      return state;
  }
};

export default ProjectReducer;
