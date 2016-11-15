import React from 'react';
import { connect } from 'react-redux';
import { DemoComponent } from '..';

const publicSessionRoot = <DemoComponent />;
const privateSessionRoot = <DemoComponent />;

const Session = ({loggedIn}) => (loggedIn ?
  privateSessionRoot : publicSessionRoot);

const mapStateToProps = state => ({loggedIn: state.config.loggedIn});

export default connect(mapStateToProps)(Session);
