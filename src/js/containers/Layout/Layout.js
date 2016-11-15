import { connect } from 'react-redux';
import { VisibleLayout } from '../../components';

const mapStateToProps = (state) => ({
  loggedIn: state.config.loggedIn,
  inProgress: state.config.progressOverlayVisibility
});

export default connect(mapStateToProps)(VisibleLayout);
