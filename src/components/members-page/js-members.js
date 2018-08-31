/* eslint-disable */

import shortid from 'shortid';

const gen4 = 'Gen 4';
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
    name: 'Bùi Anh Tú',
    avatarUrl: '/avatar-members/buianhtu-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Bùi Thanh Tùng',
    avatarUrl: '/avatar-members/buithanhtung-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture
  },
  {
    name: 'Bùi Thị Thu Trang',
    avatarUrl: '/avatar-members/buithithutrang-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Bùi Trung Hiếu',
    avatarUrl: '/avatar-members/buitrunghieu-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Cao Thị Trang',
    avatarUrl: '/avatar-members/caothitrang-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Đàm Sơn Tùng',
    avatarUrl: '/avatar-members/damsontung-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: media
  },
  {
    name: 'Đặng Công Thành',
    avatarUrl: '/avatar-members/dangcongthanh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Đinh Lệ Quỳnh Hương',
    avatarUrl: '/avatar-members/dinhlequynhhuong-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Đỗ Quang Hiệp',
    avatarUrl: '/avatar-members/doquanghiep-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Hoàng Huy Linh',
    avatarUrl: '/avatar-members/hoanghuylinh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: media
  },
  {
    name: 'Hoàng Lê Tuấn Anh',
    avatarUrl: '/avatar-members/hoangletuananh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Hoàng Văn Thắng',
    avatarUrl: '/avatar-members/hoangvanthang-min.jpg',
    gen: gen5,
    course: course11,
    major: se,
    category: expertise
  },
  {
    name: 'Lã Vũ Nguyên Anh',
    avatarUrl: '/avatar-members/lavunguyenanh-min.jpg',
    gen: gen6,
    course: course13,
    major: sb,
    category: culture
  },
  {
    name: 'Lê Thành Công',
    avatarUrl: '/avatar-members/lethanhcong-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Lê Thị Minh Châu',
    avatarUrl: '/avatar-members/lethiminhchau-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Lê Thiện Văn',
    avatarUrl: '/avatar-members/lethienvan-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Ma Công Linh',
    avatarUrl: '/avatar-members/maconglinh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: media
  },
  {
    name: 'Nguyễn Đăng Kiên',
    avatarUrl: '/avatar-members/nguyendangkien-min.jpg',
    gen: gen6,
    course: course13,
    major: ia,
    category: expertise
  },
  {
    name: 'Nguyễn Duy Nam',
    avatarUrl: '/avatar-members/nguyenduynam-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Duy Quân',
    avatarUrl: '/avatar-members/nguyenduyquan-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Hồng Minh',
    avatarUrl: '/avatar-members/nguyenhongminh-min.jpg',
    gen: gen6,
    course: course12,
    major: ia,
    category: culture
  },
  {
    name: 'Nguyễn Hữu Dũng',
    avatarUrl: '/avatar-members/nguyenhuudung-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Hữu Hoài Nam',
    avatarUrl: '/avatar-members/nguyenhuuhoainam-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Khánh Huyền',
    avatarUrl: '/avatar-members/nguyenkhanhhuyen-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: media
  },
  {
    name: 'Nguyễn Khánh Nhật',
    avatarUrl: '/avatar-members/nguyenkhanhnhat-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Khánh Việt',
    avatarUrl: '/avatar-members/nguyenkhanhviet-min.jpg',
    gen: gen5,
    course: course11,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Mạnh Hiếu',
    avatarUrl: '/avatar-members/nguyenmanhhieu-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Minh Hiếu',
    avatarUrl: '/avatar-members/nguyenminhhieu-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Quang Huy',
    avatarUrl: '/avatar-members/nguyenquanghuy-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Quang Linh',
    avatarUrl: '/avatar-members/nguyenquanglinh-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Quang Trường',
    avatarUrl: '/avatar-members/nguyenquangtruong-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Thái Bảo',
    avatarUrl: '/avatar-members/nguyenthaibao-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Thị Lan Anh',
    avatarUrl: '/avatar-members/nguyenthilananh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Thị Lộc',
    avatarUrl: '/avatar-members/nguyenthiloc-min.jpg',
    gen: gen6,
    course: course13,
    major: sb,
    category: culture
  },
  {
    name: 'Nguyễn Thị Ngọc Khánh',
    avatarUrl: '/avatar-members/nguyenthingockhanh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: media
  },
  {
    name: 'Nguyễn Thị Thùy Linh',
    avatarUrl: '/avatar-members/nguyenthithuylinh-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: media
  },
  {
    name: 'Nguyễn Tiến Dũng',
    avatarUrl: '/avatar-members/nguyentiendung-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Tiến Mạnh',
    avatarUrl: '/avatar-members/nguyentienmanh1-min.jpg',
    gen: gen6,
    course: course13,
    major: cs,
    category: expertise
  },
  {
    name: 'Nguyễn Tiến Mạnh',
    avatarUrl: '/avatar-members/nguyentienmanh2-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Tuấn Khoa',
    avatarUrl: '/avatar-members/nguyentuankhoa-min.jpg',
    gen: gen5,
    course: course11,
    major: se,
    category: culture
  },
  {
    name: 'Nguyễn Văn Huy',
    avatarUrl: '/avatar-members/nguyenvanhuy-min.jpg',
    gen: gen6,
    course: course13,
    major: ia,
    category: expertise
  },
  {
    name: 'Nguyễn Vũ Minh',
    avatarUrl: '/avatar-members/nguyenvuminh-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Nguyễn Xuân Cường',
    avatarUrl: '/avatar-members/nguyenxuancuong-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Phạm Hồng Sơn',
    avatarUrl: '/avatar-members/phamhongson-min.jpg',
    gen: gen5,
    course: course11,
    major: se,
    category: expertise
  },
  {
    name: 'Phạm Ngọc Hòa',
    avatarUrl: '/avatar-members/phamngochoa-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Phạm Quốc Đức',
    avatarUrl: '/avatar-members/phamquocduc-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Phạm Thanh Tâm',
    avatarUrl: '/avatar-members/phamthanhtam-min.jpg',
    gen: gen6,
    course: course13,
    major: mc,
    category: media
  },
  {
    name: 'Phạm Thị Kim Dung',
    avatarUrl: '/avatar-members/phamthikimdung-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Phan Văn Đức',
    avatarUrl: '/avatar-members/phanvanduc-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: expertise
  },
  {
    name: 'Phan Xuân Vũ',
    avatarUrl: '/avatar-members/phanxuanvu-min.jpg',
    gen: gen5,
    course: course12,
    major: se,
    category: media
  },
  {
    name: 'Phùng Trí Đức',
    avatarUrl: '/avatar-members/phungtriduc-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture
  },
  {
    name: 'Tạ Đăng Khoa',
    avatarUrl: '/avatar-members/tadangkhoa-min.jpg',
    gen: gen6,
    course: course13,
    major: cs,
    category: expertise
  },
  {
    name: 'Trần Anh Quân',
    avatarUrl: '/avatar-members/trananhquan-min.jpg',
    gen: gen6,
    course: course13,
    major: cs,
    category: expertise
  },
  {
    name: 'Trần Duy Quyền',
    avatarUrl: '/avatar-members/tranduyquyen-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: media
  },
  {
    name: 'Trần Hữu Hoàng',
    avatarUrl: '/avatar-members/tranhuuhoang-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Trần Văn Sơn',
    avatarUrl: '/avatar-members/tranvanson-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: diplomacy
  },
  {
    name: 'Trịnh Quốc Khánh',
    avatarUrl: '/avatar-members/trinhquockhanh-min.jpg',
    gen: gen6,
    course: course13,
    major: ia,
    category: media
  },
  {
    name: 'Trịnh Thị Hà My',
    avatarUrl: '/avatar-members/trinhthihamy-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: diplomacy
  },
  {
    name: 'Từ Khắc Hiếu',
    avatarUrl: '/avatar-members/tukhachieu-min.jpg',
    gen: gen6,
    course: course12,
    major: se,
    category: culture
  },
  {
    name: 'Vũ Hải Lâm',
    avatarUrl: '/avatar-members/vuhailam-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: expertise
  },
  {
    name: 'Vũ Hồng Quân',
    avatarUrl: '/avatar-members/vuhongquan-min.jpg',
    gen: gen6,
    course: course13,
    major: cs,
    category: expertise
  },
  {
    name: 'Vũ Phương Thảo',
    avatarUrl: '/avatar-members/vuphuongthao-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: culture
  },
  {
    name: 'Vương Mạnh Linh',
    avatarUrl: '/avatar-members/vuongmanhlinh-min.jpg',
    gen: gen6,
    course: course13,
    major: se,
    category: media
  },
  {
    name: 'Vương Tuấn Quang',
    avatarUrl: '/avatar-members/vuongtuanquang-min.jpg',
    gen: gen6,
    course: course13,
    major: cs,
    category: expertise
  }
];

members.forEach(value => (value.id = shortid.generate()));

export default members;
