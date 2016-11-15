import * as types from '../constants/ActionTypes';

const initialState = new Array;

const _sidebar = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_ENTRY:
      return {
        id: action.id,
        name: action.name,
        link: action.link
      };
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ENTRY:
      return [
        ...state,
        _sidebar(undefined, action)
      ];
    case types.ADD_ENTRIES:
      return [
        ...state,
        ...(action.entries.map(entry =>
          _sidebar(undefined,
            Object.assign({}, entry, {type: types.ADD_ENTRY}))))
      ];
    case types.FLUSH_ENTRIES:
      return new Array;
    default:
      return state;
  }
};
