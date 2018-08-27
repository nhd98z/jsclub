yarn build; mv ./build ../jsclub-production/; cd ../jsclub-production/; rm -r public/; mv build public; git add .; git commit -m "ok"; git push heroku master; heroku open; cd ../jsclub; say done;

git add .; git commit -m "ok"; git push origin master; yarn start;

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

- 1:17 PM Thursday, August 23, 2018 (GMT+7):

  - Chọn ảnh đẹp hơn cho web.

- 2:23 PM Thursday, August 23, 2018 (GMT+7):

  - Chuyển navbar menu icon unfond fold thành hamburger icon.

- 3:35 PM Thursday, August 23, 2018 (GMT+7):

  - Thêm rotate cho glbal icon (mobile).

- 4:22 PM Thursday, August 23, 2018 (GMT+7):

  - Làm lại cơ chế box-shadow của mọi button: phiên bản desktop thì phải toogle thêm btn-vmore-mb để nó reverse box-shadow.

- 4:39 PM Thursday, August 23, 2018 (GMT+7):

  - Câu thần chú 1 phát deploy luôn

  `yarn build; mv ./build ../jsclub-production/; cd ../jsclub-production/; rm -r public/; mv build public; git add .; git commit -m "ok"; git push heroku master; heroku open; cd ../jsclub; say done;`

- 5:40 PM Thursday, August 23, 2018 (GMT+7):

  - Đồng bộ button cho mobile và desktop: chưa hover thì shadow, hover : box-shadow : none.

- 10:43 PM Thursday, August 23, 2018 (GMT+7):

  - Phát hiện ra front-end bị broken trên màn hình.

- 11:14 PM Thursday, August 23, 2018 (GMT+7):

  - Fix được lỗi broken trên full hd.
  - Xoá japanese và english -> để update cuối cùng

- 1:52 PM Friday, August 24, 2018 (GMT+7):

  - Thêm Event Page (mobile), chưa xong.

- 3:15 PM Friday, August 24, 2018 (GMT+7):

  - Tải và sử dụng font của Apple: San-Francisco.

- 3:34 PM Friday, August 24, 2018 (GMT+7):

  - Change font to Open Sans.

- 5:57 PM Friday, August 24, 2018 (GMT+7):

  - Sửa tỉ lệ giữa ảnh và text ở history: 1024, 1366, 4k.

- 7:00 PM Friday, August 24, 2018 (GMT+7):

  - Thêm nhảy múa cho avatar.

- 1:42 AM Saturday, August 25, 2018 (GMT+7):

  - Rút ra kinh nghiệm margin left right của một trang không phải cố định 10%, 20% mà phải theo tỉ lệ của trang web.
  - Học được bằng cách nhìn nav của kenh14, apple, seo-vietnam.
  - _Nhưng chúng nó làm margin kiểu gì để cho việc thay đổi width thì margin đi theo mà không cần phải reload page? Mình dùng javascript set thì phải reload page margin mới đổi được!!_
  - Câu trả lời: **Sử dụng media query**

- 1:40 PM Saturday, August 25, 2018 (GMT+7):

  - Thay hết thẻ a truyền thống thành Link của `react-router-dom`, bây giờ web chính thức là SPA.

- 5:05 PM Saturday, August 25, 2018 (GMT+7):

  - Đã cài xong Loader.jsx nhưng cách nó hoạt động chưa đúng
  - **Cách hoạt động đúng của Loader là: App gọi PreLoadImage, PreLoadImage load tất cả ảnh ra, trong lúc load thì render Loader.**
  - Điều này làm cuối cùng khi mọi content đã xong.
  - Tạm thời mình chuyển tất cả Loader sang PreLoader, trong App gọi PreLoader

- 6:26 PM Saturday, August 25, 2018 (GMT+7):

  - Nhận ra mình đã ngu lồn làm 1 page read-only là SPA :).

- 8:06 PM Saturday, August 25, 2018 (GMT+7):

  - Dùng ant.design cho trang web này có lẽ là 1 sai lầm.
  - antd: css load = 500kb, js load = 1.5mb.

- 10:50 PM Saturday, August 25, 2018 (GMT+7):

  - Thay thế margin left right từ Javascript sang CSS Media Query.

- 1:06 PM Sunday, August 26, 2018 (GMT+7):

  - Đọc bài [này](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76) để hiểu cách cấu trúc một app react nhưng mình chưa hiểu lắm, có phải mình chấm thấm concept của react?
  - Phát hiện ra web tĩnh như web này của mình nên cài bằng [GatsbyJS](https://www.gatsbyjs.org/docs/) chứ không phải bằng create react app, huhu.

- 6:35 AM Monday, August 27, 2018 (GMT+7):

  - Tư duy: khi code PreLoader: đầu tiên load ảnh background homepage, load xong cho loading icon biến mất, sau đó load ngầm những ảnh nặng ở các trang khác.

- 8:07 AM Monday, August 27, 2018 (GMT+7):
  - Update lại code chuẩn chỉnh hơn theo React: setState by prevState, remove addEventListener, ngoại lệ : scroll
  - handy `{unreadMessages.length > 0 && <h2> You have {unreadMessages.length} unread messages. </h2> }`
  - handy `{this.props.isMobile ? <Mobile /> : <Desktop />}`
  - For performance, always remember clearInterval
