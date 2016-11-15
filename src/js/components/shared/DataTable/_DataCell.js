import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';

class DataCell extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { content } = this.props;

    return (
      <Cell {...this.props}>
        {content}
      </Cell>
    );
  }
}

DataCell.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.element
  ]).isRequired
};

export default DataCell;
