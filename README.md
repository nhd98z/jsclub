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

- 2:53 AM Tuesday, August 21, 2018 (GMT+7):

  - Thay background cho mobile và desktop

- 12:09 PM Tuesday, August 21, 2018 (GMT+7):

  - Thêm mới ảnh vào PreLoad
  - `window.scrollY > 100` -> `window.scrollY > 0`

- 2:59 PM Tuesday, August 21, 2018 (GMT+7):

  - ```
    if (window.scrollY === 0 && this.props.isScroll) {
      this.props.setScroll(false);
      console.log('App scroll', false);
    } else if (window.scrollY > 0 && !this.props.isScroll) {
      this.props.setScroll(true);
      console.log('App scroll', true);
    }
    ```
  - Thêm global content : Tiếng Việt, English, 日本語

- 5:43 PM Tuesday, August 21, 2018 (GMT+7):

  - Thêm i18n cho footer, navbar, whoweare, event.
  - Thêm i18n cho cả desktop và mobile.

- 7:09 PM Tuesday, August 21, 2018 (GMT+7):

  - Thêm tiếng Nhật.
  - Thêm title và logo cho website.

- 8:32 PM Tuesday, August 21, 2018 (GMT+7):

  - Đã fix bug ngôn ngữ tự đổi: lưu language_cookie.
  - Bỏ `if (window.scrollY === 0 && this.props.isScroll) this.props.setScroll(false);`.

- 11:28 PM Tuesday, August 21, 2018 (GMT+7):

  - Thêm [history](./src/components/homepage/history).
  - Xong history của desktop.

- 10:07 AM Wednesday, August 22, 2018 (GMT+7):

  - Thêm history cho mobile

- 11:10 AM Wednesday, August 22, 2018 (GMT+7):

  - Xong phân trang: router: about, events, partners, news

- 12:07 PM Wednesday, August 22, 2018 (GMT+7):

  - Thêm ảnh chủ nhiệm cho about (chưa hoàn thiện).

- 3:45 PM Wednesday, August 22, 2018 (GMT+7):

  - 80% about us, bản tiếng việt

- 3:50 PM Wednesday, August 22, 2018 (GMT+7):

  - Done quốc tế hoá about us

- 5:40 PM Wednesday, August 22, 2018 (GMT+7):

  - Hoàn thành 100% About Us của Mobile.

- 6:03 PM Wednesday, August 22, 2018 (GMT+7):

  - Gặp bug react-router: deploy lên server lập tức bị lỗi ko load đc /about.

- 10:45 PM Wednesday, August 22, 2018 (GMT+7):

  - Sửa được bug router

  ```
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });
  ```

- 1:05 AM Thursday, August 23, 2018 (GMT+7):

  - Sửa lại About us Organization: Thêm anh Mạnh.
  - Thêm nút scroll up xinh xinh.

- 2:30 AM Thursday, August 23, 2018 (GMT+7):

  - Thêm scrollFlexible reducer mang ý nghĩa phục vụ cho nút scroll up.
  - scroll cũ để > 0 : true, === 0 thì ko set lại false nữa.

- 11:52 AM Thursday, August 23, 2018 (GMT+7):
  - Hoàn thành About Us của Desktop.
