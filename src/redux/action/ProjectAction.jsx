'use client';
export const SET_TAG = 'SET_TAG';
export const SET_TAB = 'SET_TAB';

export const setTag = (tag) => ({
  type: SET_TAG,
  payload: tag,
});

export const setTab = (tabId) => ({
  type: SET_TAB,
  payload: tabId,
})