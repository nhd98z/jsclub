import { SET_SCROLL } from '../constants';

export default (state = false, action) => {
  switch (action.type) {
    case SET_SCROLL:
      const { isScroll } = action;
      return isScroll;
    default:
      return state;
  }
};
