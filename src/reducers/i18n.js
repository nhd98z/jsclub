import { VIETNAMESE, ENGLISH, JAPANESE } from '../constants';

const vn = {
  // navbar
  hello: 'Xin chào',
  aboutUs: 'Về chúng tôi',
  events: 'Sự kiện',
  partners: 'Đối tác',
  news: 'Tin tức',
  // footer
  explore: 'Chi tiết',
  visit: 'Địa chỉ',
  fptUniversity: 'Đại học FPT.',
  km29ThangLong: 'Km số 29, đại lộ Thăng Long.',
  hoaLacHighTechHanoi: 'Khu công nghệ cao Hoà Lạc, Hà Nội.',
  contact: 'Liên lạc',
  // home page

  // who we are
  whoweare: 'CHÚNG TÔI LÀ',
  whoweareLongDetail:
    'JS là một câu lạc bộ được thành lập với ý tưởng trở thành một cộng đồng dành cho sinh viên FU yêu thích tiếng Nhật và đam mê lập trình.',
  whoweareShortDetail: 'JS là một câu lạc bộ được thành lập với ý tưởng trở thành một cộng đồng cho sinh viên FU.',
  viewmore: 'Xem thêm',

  // events
  eventsUpperCase: 'SỰ KIỆN',
  card1Title: 'HACKATHON 2018',
  card1Detail: 'Quán quân FPT Hackathon 2018 gọi tên VTeam ...',
  card2Title: 'ĐÊM ĐỪNG ĐỠ',
  card2Detail: 'Đại gia đình JS Club chúng mình đã có một ngày cực kì ...',
  card3Title: 'CODE BATTLE 2018',
  card3Detail: 'JS Club rất vui mừng và tự hào khi các đội của ...',
  card4Title: 'AMETHYST 2018',
  card4Detail: 'Tối ngày 09/03/2018 vừa qua, câu lạc bộ JS đã tổ chức ...',
  card5Title: 'TEAM BUILDING 2017',
  card5Detail: 'Cùng nhìn lại những hình ảnh ấn tượng về chuyến ...',
  card6Title: 'TUYỂN GEN 6',
  card6Detail: 'Quãng thời gian thử thách đã đến những chặng cuối cùng...'

  //
};

const en = {
  // navbar
  hello: 'Hello',
  aboutUs: 'About us',
  events: 'Events',
  partners: 'Partners',
  news: 'News',
  // footer
  explore: 'Explore',
  visit: 'Visit',
  fptUniversity: 'FPT University.',
  km29ThangLong: 'Km. 29 Thang Long Avenue.',
  hoaLacHighTechHanoi: 'Hoa Lac High Tech Park, Hanoi.',
  contact: 'Contact',
  // home page

  // who we are
  whoweare: 'WHO WE ARE',
  whoweareLongDetail:
    'JS is a club founded with the idea of becoming a community for FU students who love Japanese and passionate about programming.',
  whoweareShortDetail: 'JS is a club founded with the idea of becoming a community for FU students.',
  viewmore: 'View more',

  // events
  eventsUpperCase: 'EVENTS',
  card1Title: 'HACKATHON 2018',
  card1Detail: 'FPT Hackathon 2018 called VTeam ...',
  card2Title: 'ĐÊM ĐỪNG ĐỠ',
  card2Detail: 'JS Family we have a very special day ...',
  card3Title: 'CODE BATTLE 2018',
  card3Detail: 'JS Club is very proud of its teams ...',
  card4Title: 'AMETHYST 2018',
  card4Detail: 'On the evening of March 09, 2008, the JS Club held ...',
  card5Title: 'TEAM BUILDING 2017',
  card5Detail: 'Looking back on the impressive image of the trip ...',
  card6Title: 'GEN 6 RECRUITMENT',
  card6Detail: 'The time has come for the final stages ...'

  //
};

const jp = en;

export default (state = 'en', action) => {
  switch (action.type) {
    case VIETNAMESE:
      return vn;
    case ENGLISH:
      return en;
    case JAPANESE:
      return jp;
    default:
      return state;
  }
};
