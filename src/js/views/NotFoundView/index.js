import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setSidebarVisibility } from '../../actions/Config';

class NotFoundView extends Component {
  componentWillMount() {
    this.props.removeSidebar();
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>This is a demo 404 page!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}

NotFoundView.propTypes = {
  removeSidebar: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  removeSidebar: () => dispatch(setSidebarVisibility(false))
});

export default connect(null, mapDispatchToProps)(NotFoundView);
