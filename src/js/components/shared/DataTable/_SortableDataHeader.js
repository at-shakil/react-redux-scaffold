import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';
import { ASC } from '../../../constants/Commons';

class SortableDataHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    const { handleSort, columnKey } = this.props;
    handleSort(columnKey);
  }

  render() {
    const { columnKey, label, order } = this.props;
    return (
      <Cell>
        <a className="sortable-header" onClick={this.handleSort}>
          {order.columnKey == columnKey ?
            (order.type == ASC ? label.concat(' ↑') : label.concat(' ↓'))
            :
            label}
        </a>
      </Cell>
    );
  }
}

SortableDataHeader.propTypes = {
  columnKey: PropTypes.string,
  handleSort: PropTypes.func,
  label: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired
};

export default SortableDataHeader;
