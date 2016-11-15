import * as types from '../constants/ActionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_DND_DATA: {
      let duplicateKey = false,
        duplicateIndex = -1;
      state.forEach((n, i) => {if(n.key == action.key){
        duplicateKey = true;
        duplicateIndex = i;
      }});

      return duplicateKey ?
        [
          ...state.slice(0, duplicateIndex),
          {key: action.key, value: action.value},
          ...state.slice(duplicateIndex + 1)
        ]
        :
        [...state, {key: action.key, value: action.value}];
    }
    case types.REMOVE_DND_DATA: {
      let removeIndex = -1;
      state.forEach((n, i) => {if(n.key == action.key){removeIndex = i;}});

      return removeIndex == -1 ?
        state
        :
        [
          ...state.slice(0, removeIndex),
          ...state.slice(removeIndex + 1)
        ];
    }
    case types.FLUSH_DND_DATASET:
      return [];
    default:
      return state;
  }
};
