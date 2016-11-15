import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReduxIntl, { setLocale } from 'redux-intl';
import Layout from '../containers/Layout/Layout';
import { en } from '../locales/index';
import { login } from '../actions/Config';

class App extends Component {
  componentWillMount() {
    const { loadLocale, configurePersistentStates } = this.props;

    loadLocale();
    configurePersistentStates();
  }

  render() {
    return (
      <ReduxIntl>
        <div className="page-container">
          <Layout>{this.props.children}</Layout>
        </div>
      </ReduxIntl>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  loadLocale: PropTypes.func,
  configurePersistentStates: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  loadLocale() {
    dispatch(setLocale('en', en));
  },
  configurePersistentStates() {
    const loginState = sessionStorage.getItem("loggedIn");
    switch(loginState) {
      case "true":
        dispatch(login());
        break;
      case "false":
        break;
      default:
        sessionStorage.setItem("loggedIn", false);
    }
  }
});

export default connect(null, mapDispatchToProps)(App);
