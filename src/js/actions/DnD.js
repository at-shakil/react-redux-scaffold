import * as types from '../constants/ActionTypes';

export const addDnDData = (key, value) => ({
  type: types.ADD_DND_DATA,
  key,
  value
});

export const removeDnDData = (key) => ({
  type: types.REMOVE_DND_DATA,
  key
});

export const flushDnDDataset = () => ({
  type: types.FLUSH_DND_DATASET
});
