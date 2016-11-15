import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';
import SortableDataHeader from './_SortableDataHeader';
import DataCell from './_DataCell';
import { dataTable } from '../../../config/settings.json';
import './DataTable.scss';

const {
  defaultWidth, defaultHeight, defaultRowHeight, defaultHeaderHeight
} = dataTable;

class DataTable extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { data, handleSort, customHeader, customCell } = this.props;
    return (
      <Table rowsCount={data.rows.length} {...this.props}>
        {data.columns.map((column, columnIndex) =>
          <Column
            key={columnIndex}
            columnKey={column.key}
            header={customHeader ?
              customHeader
              :
              (
                column.sortable ?
                  <SortableDataHeader
                    handleSort={handleSort}
                    order={data.order}
                    {...column} />
                  :
                  column.label
              )
            }
            cell={customCell ?
              customCell
              :
              (cellData) =>
                <DataCell
                  content={data.rows[cellData.rowIndex][columnIndex]}
                  {...cellData} />}
            width={column.label.length*40}/>)}
      </Table>
    );
  }
}

DataTable.defaultProps = {
  width: defaultWidth,
  height: defaultHeight,
  rowHeight: defaultRowHeight,
  headerHeight: defaultHeaderHeight,
  customHeader: null,
  customCell: null
};

DataTable.propTypes = {
  customCell: PropTypes.element,
  customHeader: PropTypes.element,
  data: PropTypes.object,
  handleSort: PropTypes.func
};

export default DataTable;

