import { SET_MOBILE } from '../constants';

export default (state = true, action) => {
  switch (action.type) {
    case SET_MOBILE:
      const { isMobile } = action;
      return isMobile;
    default:
      return state;
  }
};
