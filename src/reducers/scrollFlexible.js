import { SET_SCROLL_FLEXIBLE } from '../constants';

export default (state = false, action) => {
  switch (action.type) {
    case SET_SCROLL_FLEXIBLE:
      const { isScrollFlexible } = action;
      return isScrollFlexible;
    default:
      return state;
  }
};
