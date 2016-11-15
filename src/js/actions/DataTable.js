import * as types from '../constants/ActionTypes';

export const sortColumn = (tableId, columnKey) => ({
  type: types.SORT_DATATABLE_COLUMN,
  tableId,
  columnKey
});

export const sortCustomColumn = (tableId, columnKey, sorter) => ({
  type: types.SORT_DATATABLE_CUSTOM_COLUMN,
  tableId, columnKey, sorter
});
