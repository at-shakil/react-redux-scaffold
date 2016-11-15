import { combineReducers } from 'redux';
import { reducer as intl} from 'redux-intl';
import sidebar from './sidebar';
import config from './config';
import dnd from './dnd';
import dataTables from './dataTables';

const rootReducer = combineReducers({
  intl,
  sidebar,
  config,
  dnd,
  dataTables
});

export default rootReducer;
