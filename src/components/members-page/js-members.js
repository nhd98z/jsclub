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
    gen: gen5,
    course: course12,
    major: se,
    category: diplomacy,
    id: shortid.generate()
  },
  {
    name: 'Bùi Trung Hiếu',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Văn Huy',
    gen: gen6,
    course: course12,
    major: ia,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Ma Công Linh',
    gen: gen6,
    course: course12,
    major: se,
    category: media,
    id: shortid.generate()
  },
  {
    name: 'Trần Quang Nhật',
    gen: gen5,
    course: course13,
    major: se,
    category: culture,
    id: shortid.generate()
  },
  {
    name: 'Bùi Thanh Tùng',
    gen: gen5,
    course: course13,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Xuân Cường',
    gen: gen5,
    course: course12,
    major: ia,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Tuấn Quang',
    gen: gen6,
    course: course12,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Tạ Đăng Khoa',
    gen: gen5,
    course: course13,
    major: cs,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Hồ Khánh Vũ',
    gen: gen5,
    course: course13,
    major: se,
    category: expertise,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Văn Hoàng',
    gen: gen5,
    course: course12,
    major: gd,
    category: media,
    id: shortid.generate()
  },
  {
    name: 'Nguyễn Tiến Dũng',
    gen: gen6,
    course: course12,
    major: se,
    category: culture,
    id: shortid.generate()
  }
];

export default members;
