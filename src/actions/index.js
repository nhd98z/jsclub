import { SET_MOBILE, SET_SCROLL, VIETNAMESE, ENGLISH, JAPANESE } from '../constants';

export const setMobile = width => {
  console.log('action setMobile, width', width);
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
