import { combineReducers } from 'redux';

import mobile from './mobile';
import scroll from './scroll';
import i18n from './i18n';

export default combineReducers({
  mobile,
  scroll,
  i18n
});
