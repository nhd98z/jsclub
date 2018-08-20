# LOGS

- Cách viết README.md: [Markdown syntax guide](https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html)

- 12:01 AM Monday, August 20, 2018 (GMT+7):

  - Hoàn thành header và background (của homepage).

- 12:58 AM Monday, August 20, 2018 (GMT+7):

  - FIXED lỗi của PreLoadImage, giờ nó đã ngon lành.

- 9:06 AM Monday, August 20, 2018 (GMT+7):

  - Hiểu được việc bind trong render (PreLoadImage) sẽ gây ra performance issues, và cách chữa [đây](https://medium.freecodecamp.org/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e).
  - Tuy nhiên cách làm hơi phức tạp và trong trường hợp này performance chưa ảnh hưởng nhiều nên không dùng, để như cũ.

- 11:09 AM Monday, August 20, 2018 (GMT+7):

  - Done event-and-new của Desktop (Tùng code).
  - Done footer for desktop and mobile (Dũng code).

- 12:40 PM Monday, August 20, 2018 (GMT+7):

  - Trong App.jsx bỏ `this.props.setScroll(false);` đi, tức là từ bây giờ chỉ scroll xuống chứ không nhận state scroll lên.

- 1:04 PM Monday, August 20, 2018 (GMT+7):

  - Sửa `this.props.setMobile(window.innerWidth);` thành `this.interval = setInterval(() => { this.props.setMobile(window.innerWidth); }, 50);`: Cứ 50ms check window.innerWidth một lần để consider mobile hay desktop.

- 1:39 PM Monday, August 20, 2018 (GMT+7):

  - Chỉnh Icon search => global.

- 3:26 PM Monday, August 20, 2018 (GMT+7):

  - Update FooterDesktop: Thiết kế mới đẹp hơn, có slogan của clb.

- 5:04 PM Monday, August 20, 2018 (GMT+7):

  - Navbar Desktop height : 48px -> 64px.
  - Logo Mobile : 48px -> 64px.

- 5:18 PM Monday, August 20, 2018 (GMT+7):

  - Background : bỏ `margin-top`, thêm 1 cái div màu `#000000` vào trên TOP.
  - `background` NavBar để opacity 0.8, rất đẹp.

- 6:49 PM Monday, August 20, 2018 (GMT+7):

  - Hiểu cách viết truy cập trực tiếp vào file như [này](./src/components/App.jsx).

- 6:49 PM Monday, August 20, 2018 (GMT+7):

  - Chuyển `window.scrollY > 0` thành `window.scrollY > 100` trong [App.jsx](./src/components/App.jsx).
  - Thay ảnh vào [EventDesktop.jsx](./src/components/homepage/event-and-new/EventDesktop.jsx).
  - Thêm title và detail vào [EventDesktop.jsx](./src/components/homepage/event-and-new/EventDesktop.jsx)., thêm CSS.

- 9:47 PM Monday, August 20, 2018 (GMT+7):

  - Sửa logo load của [NavBarDesktop.jsx](./src/components/navbar/NavBarDesktop.jsx).
  - Sửa logo load của [NavBarMobile.jsx](./src/components/navbar/NavBarMobile.jsx).
  - Bây giờ logo ở navbar xuất hiện luôn.

- 10:12 PM Monday, August 20, 2018 (GMT+7):

  - Comment lại tất cả code liên quan đến background CLB ở bản xôi, ở cả [NavBarDesktop.jsx](./src/components/navbar/NavBarDesktop.jsx) và [NavBarMobile.jsx](./src/components/navbar/NavBarMobile.jsx).

- 10:55 PM Monday, August 20, 2018 (GMT+7):

  - Animation cho hover card ở [EventDesktop.jsx](./src/components/homepage/event-and-new/EventDesktop.jsx).

- 1:24 AM Tuesday, August 21, 2018 (GMT+7):
  - Làm xong [EventMobile.jsx](./src/components/homepage/event-and-new/EventMobile.jsx).
