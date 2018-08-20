import { SET_MOBILE, SET_SCROLL } from '../constants';

export const setMobile = width => {
  const isMobile = width < 1024 ? true : false;
  const action = {
    type: SET_MOBILE,
    isMobile
  };
  return action;
};

export const setScroll = isScroll => {
  const action = {
    type: SET_SCROLL,
    isScroll
  };
  return action;
};
