import React, { PropTypes } from 'react';

const ClientArea = ({ children }) => (
  <div>{children}</div>
);

ClientArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default ClientArea;
