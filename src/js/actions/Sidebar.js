import * as types from '../constants/ActionTypes';

let nextEntryId = 0;

export const addEntry = (name, link) => ({
  type: types.ADD_ENTRY,
  id: nextEntryId++,
  name,
  link
});

export const addEntries = (entries) => ({
  type: types.ADD_ENTRIES,
  entries: entries.map(entry =>
    Object.assign({}, entry, {id: nextEntryId++}))
});

export const flushEntries = () => ({
  type: types.FLUSH_ENTRIES
});
