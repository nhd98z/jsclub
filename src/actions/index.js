import { SET_MOBILE, SET_SCROLL, VIETNAMESE, ENGLISH, JAPANESE, SET_SCROLL_FLEXIBLE } from '../constants';

export const setMobile = width => {
  let isMobile;
  if (width <= 768) {
    isMobile = true;
  } else {
    isMobile = false;
  }
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

export const setVietnamese = () => {
  console.log(`action call, language = %cVietnamese`, 'font-size: 16px; color: orange');
  const action = {
    type: VIETNAMESE
  };
  return action;
};

export const setEnglish = () => {
  console.log(`action call, language = %cEnglish`, 'font-size: 16px; color: orange');
  const action = {
    type: ENGLISH
  };
  return action;
};

export const setJapanese = () => {
  console.log(`action call, language = %cJapanese`, 'font-size: 16px; color: orange');
  const action = {
    type: JAPANESE
  };
  return action;
};

export const setScrollFlexible = isScrollFlexible => {
  const action = {
    type: SET_SCROLL_FLEXIBLE,
    isScrollFlexible
  };
  return action;
};
