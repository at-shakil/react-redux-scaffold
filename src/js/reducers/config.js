import * as types from '../constants/ActionTypes';

const initialState = {
  progressOverlayVisibility: false,
  loggedIn: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.SET_LOGIN_STATE:
      sessionStorage.setItem("loggedIn", action.loggedIn);
      return Object.assign({}, state, {
        loggedIn: action.loggedIn
      });
    case types.SET_PROGRESS_OVERLAY:
      return Object.assign({}, state, {
        progressOverlayVisibility: action.progressOverlayVisibility
      });
    default:
      return state;
  }
};
