import * as types from '../constants/ActionTypes';
import { ASC, DESC } from '../constants/Commons';

const initialState = []; // eslint-disable-line

// TODO: Remove following sample state upon backend integration
const sampleState = [
  {
    id: "renderedReport",
    data: {
      columns: [
        {
          key: "id",
          label: "ID",
          sortable: true,
          dataType: "number"
        },
        {
          key: "userName",
          label: "User",
          sortable: true,
          dataType: "string"
        },
       {
          key: "userEmail",
          label: "Email",
          sortable: true,
          dataType: "string"
        }
      ],
      rows: [
        [1, "Jack Smith", "jack.smith@gmail.com"],
        [2, "John Adam", "john@adam.com"]
      ],
      order: {
        type: "ASC",
        columnKey: "id"
      }
    }
  }
];

function sortRows(rows, columnIndex, sortType, dataType) {
  // TODO: Handle custom data types
  return rows.concat().sort((m, n) =>
    (sortType == ASC ?
      m[columnIndex] > n[columnIndex]
      :
      m[columnIndex] < n[columnIndex]));
}

export default (state = sampleState, action) => {
  switch(action.type) {
    case types.SORT_DATATABLE_COLUMN: {
      let tableIndex = state.map(table => table.id).indexOf(action.tableId);
      if(tableIndex != -1) {
        let dataTable = state[tableIndex].data;
        let sortableColumnIndex = dataTable.columns.map(column => column.key)
          .indexOf(action.columnKey);
        let sortableColumnDataType =
          dataTable.columns[sortableColumnIndex] == undefined ?
            null
            :
            dataTable.columns[sortableColumnIndex].dataType;
        let sortType = dataTable.order == undefined ?
          types.ASC
          :
          (dataTable.order.columnKey == action.columnKey ?
            (dataTable.order.type == ASC ? DESC : ASC)
            :
            ASC);
        let sortedRows = sortRows(
          dataTable.rows,
          sortableColumnIndex,
          sortType,
          sortableColumnDataType
        );

        return [
          ...state.slice(0, tableIndex),
          {
            id: action.tableId,
            data: {
              columns: dataTable.columns,
              rows: sortedRows,
              order: {
                type: sortType,
                columnKey: action.columnKey
              }
            }
          },
          ...state.slice(tableIndex + 1)
        ];
      } else {
        return state;
      }
    }
    case types.SORT_DATATABLE_CUSTOM_COLUMN:
      // TODO
      return state;
    default:
      return state;
  }
};
