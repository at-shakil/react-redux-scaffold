import React, { PropTypes } from 'react';
import './ProgressOverlay.scss';

const ProgressOverlay = ({isVisible}) => (
  <div className={isVisible ? "loading" : "hidden"} />
);

ProgressOverlay.defaultProps = {
  isVisible: false
};

ProgressOverlay.propTypes = {
  isVisible: PropTypes.bool
};

export default ProgressOverlay;
