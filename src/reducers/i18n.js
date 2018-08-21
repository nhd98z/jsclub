import { VIETNAMESE, ENGLISH, JAPANESE } from '../constants';

const vn = {
  //
  webTitle: 'CLB Kĩ Sư Phần Mềm Nhật Bản - JS Club',

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
  card6Detail: 'Quãng thời gian thử thách đã đến những chặng cuối cùng...',

  // through history
  throughHistory: 'QUÁ TRÌNH HÌNH THÀNH'
};

const en = {
  //
  webTitle: 'Japanese Software Engineers - JS Club',

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
  card6Detail: 'The time has come for the final stages ...',

  // through history
  throughHistory: 'THROUGHOUT HISTORY'
};

const jp = {
  //
  webTitle: '日本のエンジニア - JS Club',

  // navbar
  hello: 'Hello',
  aboutUs: '私たちに関しては',
  events: 'イベント',
  partners: 'パートナー',
  news: 'ニュース',
  // footer
  explore: '探検する',
  visit: '訪問',
  fptUniversity: 'FPT 大学。',
  km29ThangLong: 'Km. 29 Thang Long アベニュー。',
  hoaLacHighTechHanoi: 'ホアラックハイテクパーク、ハノイ。',
  contact: '接触',
  // home page

  // who we are
  whoweare: '私たちは誰です',
  whoweareLongDetail: 'JSは、日本語を愛し、プログラミングに熱心なFU学生のためのコミュニティになるという考えで設立されたクラブです。',
  whoweareShortDetail: 'JSはFU学生のためのコミュニティになるという考えで設立されたクラブです。',
  viewmore: 'もっと見る',

  // events
  eventsUpperCase: 'イベント',
  card1Title: 'HACKATHON 2018',
  card1Detail: 'FPT Hackathon 2018はVTeamと呼ばれる...',
  card2Title: 'ĐÊM ĐỪNG ĐỠ',
  card2Detail: 'JSファミリーはとても特別な日です...',
  card3Title: 'CODE BATTLE 2018',
  card3Detail: 'JSクラブはそのチームを非常に誇りに思います...',
  card4Title: 'アメジスト 2018',
  card4Detail: '2008年3月9日の夜、JSクラブが開催されました...',
  card5Title: 'チームビルディング 2017',
  card5Detail: '旅の印象的なイメージを振り返ります...',
  card6Title: '第6世代募集',
  card6Detail: '最後のステージには時が来た...',

  // through history
  throughHistory: '歴史を通して'
};

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
