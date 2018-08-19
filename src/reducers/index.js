import { combineReducers } from 'redux';

import mobile from './mobile';
import scroll from './scroll';

export default combineReducers({
  mobile,
  scroll
});
