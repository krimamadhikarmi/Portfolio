'use client';
import { SET_TAG , SET_TAB } from '../action/ProjectAction';

const initialState = {
  tag: 'All',
  tab: 'education',
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    case SET_TAB:
      return {
        ...state,
         tab: action.payload
      };

    default:
      return state;
  }
};

export default ProjectReducer;

