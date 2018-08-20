# LOGS

- Cách viết README.md: [Markdown syntax guide](https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html)

- 12:01 AM Monday, August 20, 2018 (GMT+7): Hoàn thành header và background (của homepage).

- 12:58 AM Monday, August 20, 2018 (GMT+7): FIXED lỗi của PreLoadImage, giờ nó đã ngon lành.

- 9:06 AM Monday, August 20, 2018 (GMT+7): Hiểu được việc bind trong render (PreLoadImage) sẽ gây ra performance issues, và cách chữa [đây](https://medium.freecodecamp.org/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e). Tuy nhiên cách làm hơi phức tạp và trong trường hợp này performance chưa ảnh hưởng nhiều nên không dùng, để như cũ.

- 11:09 AM Monday, August 20, 2018 (GMT+7): Done event-and-new của Desktop (Tùng code), done footer for desktop and mobile (Dũng code).

- 12:40 PM Monday, August 20, 2018 (GMT+7): Trong App.jsx bỏ `this.props.setScroll(false);` đi, tức là từ bây giờ chỉ scroll xuống chứ không nhận state scroll lên.

- 1:04 PM Monday, August 20, 2018 (GMT+7): Sửa `this.props.setMobile(window.innerWidth);` thành `this.interval = setInterval(() => { this.props.setMobile(window.innerWidth); }, 50);`: Cứ 50ms check window.innerWidth một lần để consider mobile hay desktop.

- 1:39 PM Monday, August 20, 2018 (GMT+7): Chỉnh Icon search => global.

- 3:26 PM Monday, August 20, 2018 (GMT+7): Update FooterDesktop: Thiết kế mới đẹp hơn, có slogan của clb.

- 5:04 PM Monday, August 20, 2018 (GMT+7) : Navbar Desktop height : 48px -> 64px, Logo Mobile : 48px -> 64px
