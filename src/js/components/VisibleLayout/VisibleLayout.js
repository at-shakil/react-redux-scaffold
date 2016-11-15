import React, { Component, PropTypes } from 'react';
import ClientArea from './_ClientArea';
import Footer from './_Footer';
import Header from './_Header';
import Sidebar from './_Sidebar';
import { ProgressOverlay } from '..';
import './VisibleLayout.scss';

class VisibleLayout extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { loggedIn, inProgress, children } = this.props;

    const layout = loggedIn ?
      <div>
        <ProgressOverlay isVisible={inProgress} />
        <Header />
        <Sidebar />
        <ClientArea>{children}</ClientArea>
        <Footer />
      </div>
      :
      <div>
        <ProgressOverlay isVisible={inProgress} />
        {children}
      </div>;

    return layout;
  }
}

VisibleLayout.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  inProgress: PropTypes.bool.isRequired,
  children: PropTypes.element
};

export default VisibleLayout;
