import { SET_MOBILE, SET_SCROLL } from '../constants';

export const setMobile = width => {
  console.log('action parameter', width);
  const isMobile = width <= 768 ? true : false;
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
