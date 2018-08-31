/* eslint-disable */

import shortid from 'shortid';

const gen5 = 'Gen 5';
const gen6 = 'Gen 6';
const course11 = 'K11';
const course12 = 'K12';
const course13 = 'K13';
const se = 'Software Engineering';
const sb = 'Japanese Language';
const mc = 'Multimedia Communications';
const gd = 'Graphic Design';
const ba = 'Business Administration';
const ia = 'Information Assurance';
const cs = 'Computer Science';
const expertise = 'Expertise';
const media = 'Media';
const culture = 'Culture';
const diplomacy = 'Diplomacy';

const members = [
  {
    name: 'Nguyễn Hữu Dũng',
    avatarUrl: '/avatar-members/nguyenhuudung.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: diplomacy,
    id: shortid.generate()
  },
  {
    name: 'Bùi Trung Hiếu',
    avatarUrl: '/avatar-members/buitrunghieu.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Văn Huy',
    avatarUrl: '/avatar-members/nguyenvanhuy.jpg',
    gen: gen6,
    course: course12,
    major: ia,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Ma Công Linh',
    avatarUrl: '/avatar-members/maconglinh.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: media,
    id: shortid.generate()
  },
  {
    name: 'Trần Quang Nhật',
    avatarUrl: '/avatar-members/tranquangnhat.jpg',
    gen: gen5,
    course: course13,
    major: se,
    category: culture,
    id: shortid.generate()
  },
  {
    name: 'Bùi Thanh Tùng',
    avatarUrl: '/avatar-members/buithanhtung.jpg',
    gen: gen5,
    course: course13,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Xuân Cường',
    avatarUrl: '/avatar-members/nguyenxuancuong.jpg',
    gen: gen5,
    course: course12,
    major: ia,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Tuấn Quang',
    avatarUrl: '/avatar-members/nguyentuanquang.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Tạ Đăng Khoa',
    avatarUrl: '/avatar-members/tadangkhoa.jpg',
    gen: gen5,
    course: course13,
    major: cs,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Hồ Khánh Vũ',
    avatarUrl: '/avatar-members/hokhanhvu.jpg',
    gen: gen5,
    course: course13,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Văn Hoàng',
    avatarUrl: '/avatar-members/nguyenvanhoang.jpg',
    gen: gen5,
    course: course12,
    major: gd,
    category: media,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Tiến Dũng',
    avatarUrl: '/avatar-members/nguyentiendung.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture,
    id: shortid.generate()
  }
];

export default members;
