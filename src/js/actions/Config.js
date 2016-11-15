import * as types from '../constants/ActionTypes';

export const setProgressOverlay = (isVisible) => ({
  type: types.SET_PROGRESS_OVERLAY,
  progressOverlayVisibility: isVisible
});

export const login = () => ({
  type: types.SET_LOGIN_STATE,
  loggedIn: true
});

export const logout = () => ({
  type: types.SET_LOGIN_STATE,
  loggedIn: false
});
