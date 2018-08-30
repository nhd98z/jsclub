import { VIETNAMESE, ENGLISH, JAPANESE } from '../constants';

const vi = {
  //
  webTitle: 'CLB Kĩ Sư Nhật Bản - JS Club',

  // navbar
  hello: 'Xin chào',
  aboutUs: 'Về chúng tôi',
  members: 'Thành viên',
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

  // activities
  activitiesUpperCase: 'HOẠT ĐỘNG',
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
  throughHistory: 'QUÁ TRÌNH HÌNH THÀNH',
  throughHistoryMobile: 'LỊCH SỬ',
  detail201801:
    'Trong năm 2018, CLB JS đã tổ chức thành công sự kiện AMETHYST 2018 – Love and Passion. Sự kiện nhằm kỉ niệm SN thứ 5 của CLB, tôn vinh những cá nhân có nhiều đóng góp tích cực trong suốt quá trình phát triển.',
  detail201802:
    'Năm 2018, JS đồng thời tổ chức chuyến team building tại Bản Xôi, Ba Vì. Chuyến đi có sự góp mặt đầy đủ của thành viên thế hệ thứ 6 và các anh chị thế hệ trước.',
  detail201701:
    'Trong năm 2017, CLB JS đã tổ chức Coding Project 2017. Sau quá trình cố gắng và nỗ lực không ngừng, các team đã hoàn thành được sản phẩm của mình để "trình làng" trong đêm chung kết 21/9.',
  detail201702:
    'Chúng tôi đã tổ chức Prom – Awards Sapphire 2017 với sự góp mặt của đại diện công ty phần mềm FPT Software, các thầy cô trong trường cùng đại diện các Câu lạc bộ như No Shy, Business, Vovinam...',
  detail201601:
    'Trong năm 2016, JS Club lần đầu tiên tổ chức Coding Project với đêm chung kết là buổi bảo vệ của 3 team: Tạ team với game War of Empires; Fantastic 4 với game Mr.X và HMĐQ team với ứng dụng học tiếng Nhật Dekiru Nihongo.',
  detail201602:
    'Amethyst 2016 - Đêm prom đầu tiên của JS Club đã diễn ra thành công tốt đẹp. Ngoài ý nghĩa tôn vinh những cá nhân có hoạt động xuất sắc, Amethyst 2016 còn là nơi để gắn kết các thế hệ của câu lạc bộ.',
  detail201501:
    'Kì Fall 2015, các thành viên của CLB JS đã có một chuyến teambuidling - dã ngoại tại miền thung lũng Mai Châu, Hòa Bình - một dịp xả hơi sau những môn thi cuối cùng.',
  detail201502:
    'Ngày hội các CLB là một dịp quan trọng để các câu lạc bộ ở FU biểu dương lực lượng và chia sẻ văn hóa riêng biệt của từng clb. JS Club đã tham gia Festival Clubs 2015 và bày một gian hàng Công nghệ với những game cho chính JS phát triển.',
  detail201801Mobile: 'Trong năm 2018, CLB JS đã tổ chức thành công sự kiện AMETHYST 2018 – Love and Passion.',
  detail201802Mobile: 'Năm 2018, JS đồng thời tổ chức chuyến team building tại Bản Xôi, Ba Vì.',
  detail201701Mobile: 'Trong năm 2017, CLB JS đã tổ chức Coding Project 2017.',
  detail201702Mobile:
    'Để điểm qua những thăng trầm, những niềm vui cũng như nỗi buồn trong năm qua, chúng tôi đã tổ chức Prom – Awards Sapphire 2017.',
  detail201601Mobile: 'Trong năm 2016, JS Club lần đầu tiên tổ chức Coding Project.',
  detail201602Mobile: 'Amethyst 2016 - Đêm prom đầu tiên của JS Club đã diễn ra thành công tốt đẹp.',
  detail201501Mobile:
    'Kết thúc kỳ học cuối cùng của năm 2015, các thành viên của CLB JS đã có một chuyến teambuidling - dã ngoại tại miền thung lũng Mai Châu, Hòa Bình.',
  detail201502Mobile: 'Những khoảnh khắc K11 để lại dấu chân tại gian hàng của JS tại Ngày hội các Câu lạc bộ.',

  // about

  storyUpper: `VỀ CHÚNG TÔI`,
  organizationUpper: 'TỔ CHỨC',
  story: 'Về chúng tôi',
  organization: 'Tổ chức',

  // about mobile
  aboutDetail01MobileIntroduction: `JS Club hay Japanese Software Engineers Club được thành lập vào tháng 2/2014, mang sứ mệnh trở thành nơi chia sẻ kiến thức của các sinh viên đam mê tiếng Nhật và lập trình.`,
  aboutDetail02MobileIntroduction: `Trở thành JSer chính là tấm vé để tham gia các lớp học lập trình và ngôn ngữ Nhật trải dài các cấp độ.`,
  aboutDetail03MobileIntroduction: `Ngoài việc học, các cuộc thi với tính ganh đua cao như Coding Project cũng được tổ chức.`,
  aboutDetail04MobileIntroduction: `JS Club là một trong những câu lạc bộ học thuật hàng đầu tại Hòa Lạc với màu sắc văn hóa không đâu "đụng hàng" được.`,
  aboutDetail05MobileIntroduction: `Hòa Lạc xôi ấy chưa bao giờ khiến các cô gái cô đơn, buồn tủi, bởi họ hiểu bên mình còn có cả một đội quân áo đỏ, sẵn sàng bên họ trong lúc họ yếu lòng nhất.`,
  aboutDetail06MobileIntroduction: `Người ta thường nói: “Đi đâu không quan trọng, quan trọng nơi đó có màu áo JS hay không”. Teambuilding như một món ăn tinh thần đặc biệt không thể thiếu với mỗi JSer.`,
  aboutDetail07MobileIntroduction: `Cũng như teambuilding, JS không thể thiếu những buổi overnight chơi boardgame và tâm sự, san sẻ nỗi lòng. Mỗi câu nói, mỗi lời tâm sự rở nên thật chất chứa.`,
  aboutDetail08MobileIntroduction: `Với mỗi JSer, đây sẽ là ngôi nhà thân thương, một nơi ươm mầm cho đam mê và nhiệt huyết tuổi trẻ của mình.`,
  aboutDetail01MobileOrganization: `Từ Khắc Hiếu, sinh viên khoá 12 ngành SE hiện đang là Chủ nhiệm CLB. Anh là người ôn hòa, biết lắng nghe mọi người, có tinh thần trách nhiệm cao. Đặc biệt Chủ nhiệm là người có khả năng xử lí các tình huống chỉ trong “một nốt nhạc”.`,
  aboutDetail02MobileOrganization: `Phó Chủ nhiệm: Nguyễn Tiến Mạnh. Tuy bề ngoài nhìn có vẻ lạnh lùng, nhưng anh lại là người anh trai ấm áp, luôn quan tâm, lo lắng động viên thành viên của CLB.`,
  aboutDetail03MobileOrganization: `Ban Chuyên môn mang vai trò giảng dạy hay trợ giảng cho các Chương trình Hỗ trợ học tập của Phòng Công tác sinh viên và lên nội dung cho những Workshop, Seminar và Training nội bộ tại JS.`,
  aboutDetail04MobileOrganization: `Ban Truyền thông - những người hùng đứng sau những bài viết, ấn phẩm và media của JS. Không cần biết tiếng Nhật, cũng không đòi hỏi bạn phải có kỹ năng lập trình siêu phàm, tại đây, bạn sẽ được tìm hiểu và áp dụng thêm về kiến thức thiết kế, PR và marketing.`,
  aboutDetail05MobileOrganization: `Tại JS Club, thành viên Văn Hóa cần là những người làm nên Chất riêng của CLB. Họ là những người chăm lo cho những buổi teambuilding của CLB, hay những bữa tiệc liên hoan nho nhỏ khi hoàn thành project, và cả những lần đi phượt xa sau những học kỳ dài dài tưởng chừng như vô tận.`,
  aboutDetail06MobileOrganization: `Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại.`,

  // about desktop

  aboutDetail01DesktopIntroduction: `JS Club là tên viết tắt của Japanese Software Engineers Club – Câu lạc bộ Kỹ sư phần mềm Nhật Bản. Được thành lập vào tháng 2/2014, cái tên JS được đặt theo một chuyên ngành hẹp của ngành Kỹ thuật phần mềm tại ĐH FPT. Từ những ngày đầu thành lập, JS mang sứ mạng trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS. Sau này, câu lạc bộ được mở rộng, trở thành nơi chia sẻ kiến thức của các sinh viên YÊU THÍCH TIẾNG NHẬT và ĐAM MÊ LẬP TRÌNH.`,
  aboutDetail02DesktopIntroduction: `Trở thành một phần của JS Club, tôi ngẫu nhiên có một chiếc vé miễn phí tham gia các lớp học lập trình và ngôn ngữ Nhật từ cơ bản đến nâng cao với giảng viên là các anh chị thành viên của câu lạc bộ. Những con người không những giỏi về mặt chuyên môn mà còn rất yêu thương, nhiệt huyết giảng dạy nữa. Giáo trình siêu chất, do anh chị tự biên soạn, tích lũy trong quá trình học tập để giúp cho quá trình tiếp thu kiến thức của chúng tôi hiệu quả nhất có thể.`,
  aboutDetail03DesktopIntroduction: `Bên cạnh việc được học tập, chúng tôi được cọ sát bản thân trong các cuộc thi nội bộ Coding Project. Được tự mình làm ra sản phẩm công nghệ bằng chính những ý tưởng sáng tạo mà chúng tôi nghĩ ra. Và một điều khiến tôi yên tâm hơn nữa là chắc chắn chúng tôi sẽ có sản phẩm bởi một dàn supporter siêu giỏi, siêu chất, siêu nhiệt tình và siêu thương sót đàn em bé nhỏ. `,
  aboutDetail04DesktopIntroduction: `JS Club được biết đến là một trong những câu lạc bộ học thuật hàng đầu ở xứ sở Hòa Lạc. Không quá sôi nổi như những câu lạc bộ phòng trào khác nhưng những sự kiện ở JS đều mang chất riêng, một màu sắc văn hóa không thể hòa trộn với bất kỳ câu lạc bộ nào khác. Hai sự kiện mang dấu ấn của JS đó là Coding Inspiration và FPTU Hackathon Open được tổ chức xen kẽ giữa các năm.`,
  aboutDetail05DesktopIntroduction: `Hòa Lạc xa xôi ấy chưa bao giờ khiến tôi cô đơn, buồn tủi, bởi tôi hiểu bên tôi còn có cả một đội quân áo đỏ, sẵn sàng bên tôi trong lúc tôi yếu lòng nhất. Là con gái JS lúc nào cũng phải ngẩng cao đầu, tự hào vì những chàng trai của chúng tôi quá ngọt ngào và lãng mạn. Những chàng hoàng tử ấy chưa bao giờ để chúng tôi phải tủi thân trong những ngày đặc biệt dành riêng cho chị em. Không quá khoa trương, màu mè nhưng lúc nào cũng đầy ấm áp và ngọt ngào. Còn con gái JS thì cũng có dành một ngày riêng trong năm để dành cho anh em.`,
  aboutDetail06DesktopIntroduction: `Kết thúc một kỳ học vất vả, một kỳ hoạt động hiệu quả là khoảng thời gian những người con JS dành riêng cho nhau trong sự kiện Teambuilding. Tôi vẫn nghe đâu đó câu nói: “Đi đâu không quan trọng, quan trọng nơi đó có màu áo JS hay không”. Teambuilding như một món ăn tinh thần đặc biệt với những con người ấy. Là khoảng thời gian chúng tôi xích lại bên nhau, kể cho nhau nghe về những gì đã qua, tâm sự cho những gì sắp tới và hứa sẽ mãi bên nhau, cũng nhau cố gắng. `,
  aboutDetail07DesktopIntroduction: `Ở JS Club còn một món ăn tinh thần giúp gắn kết anh chị em trong đại gia đình chúng tôi, đó là những buổi overnight, chơi boardgame và tâm sự, san sẻ nỗi lòng. Với tôi những buổi tối như thế trở nên thật ý nghĩa, thời gian trôi qua chậm hơn, không gian tĩnh lặng. Mỗi câu nói, mỗi lời tâm sự rở nên thật chất chứa. Đó có thể chút buồn tủi của bản thân, một vài niềm vui nho nhỏ, là cả nỗi niềm trăn trở để phát triển JS, không những mạnh bên ngoài mà còn chất bên trong.`,
  aboutDetail08DesktopIntroduction: `Hơn cả một câu lạc bộ, bên JS tôi có cả một vùng trời thương nhớ! Cảm ơn thanh xuân đã đưa tôi tới đây, trở thành một mảnh ghép của ngôi nhà ấy. Cảm ơn vì đã là gia đình tôi, anh em tôi, bạn bè tôi, trở thành nơi nuôi dưỡng đam mê của tôi thêm cháy rực, là động lực cho tôi vẽ thêm màu sắc cho ước mơ, cho tuổi trẻ nhiệt huyết.`,
  wannaKnowAboutDepartment: `Muốn tìm hiểu thêm về các ban?`,
  aboutDetail01DesktopOrganization: `Từ Khắc Hiếu, sinh viên khoá 12 ngành SE hiện đang là Chủ nhiệm CLB. Anh là người ôn hòa, biết lắng nghe mọi người, có tinh thần trách nhiệm cao. Đặc biệt Chủ nhiệm là người có khả năng xử lí các tình huống chỉ trong “một nốt nhạc”.`,
  aboutDetail02DesktopOrganization: `Phó Chủ nhiệm: Nguyễn Tiến Mạnh. Tuy bề ngoài nhìn có vẻ lạnh lùng, nhưng anh lại là người anh trai ấm áp, luôn quan tâm, lo lắng động viên thành viên của CLB.`,
  aboutDetail03DesktopOrganization: `Ban Chuyên môn mang vai trò giảng dạy hay trợ giảng cho các Chương trình Hỗ trợ học tập của Phòng Công tác sinh viên và lên nội dung cho những Workshop, Seminar và Training nội bộ tại JS.`,
  aboutDetail04DesktopOrganization: `Ban Truyền thông - những người hùng đứng sau những bài viết, ấn phẩm và media của JS. Không cần biết tiếng Nhật, cũng không đòi hỏi bạn phải có kỹ năng lập trình siêu phàm, tại đây, bạn sẽ được tìm hiểu và áp dụng thêm về kiến thức thiết kế, PR và marketing.`,
  aboutDetail05DesktopOrganization: `Tại JS Club, thành viên Văn Hóa cần là những người làm nên Chất riêng của CLB. Họ là những người chăm lo cho những buổi teambuilding của CLB, hay những bữa tiệc liên hoan nho nhỏ khi hoàn thành project, và cả những lần đi phượt xa sau những học kỳ dài dài tưởng chừng như vô tận.`,
  aboutDetail06DesktopOrganization: `Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại. Ban Đối Ngoại.`,
  wannaKnowAboutWhoWeAre: 'Quay lại Về chúng tôi?',

  // event page

  eventsUpperCase: 'SỰ KIỆN',
  hackathon: `Hackathon`,
  ci: 'Coding Inspiration',
  cp: 'Coding Project',
  prom: 'Prom',
  tb: 'Team building',

  eventIntroductionMobile: `Đây là text giới thiệu tổng quan về trang event.`,
  hackathonMobile: `Đây là text giới thiệu về hackathon.`,
  ciMobile: `Đây là text giới thiệu về CI.`,
  cpMobile: `Đây là text giới thiệu về CP.`,
  promMobile: `Đây là text giới thiệu về Prom.`,
  tbMobile: `Đây là text giới thiệu về TB.`,

  hackathonDesktop: `Đây là text giới thiệu về hackathon. Đây là text giới thiệu về hackathon. Đây là text giới thiệu về hackathon. Đây là text giới thiệu về hackathon.`,
  ciDesktop: `Đây là text giới thiệu về CI. Đây là text giới thiệu về CI. Đây là text giới thiệu về CI. Đây là text giới thiệu về CI. Đây là text giới thiệu về CI.`,
  cpDesktop: `Đây là text giới thiệu về CP. Đây là text giới thiệu về CP. Đây là text giới thiệu về CP. Đây là text giới thiệu về CP. Đây là text giới thiệu về CP.`,
  promDesktop: `Đây là text giới thiệu về Prom. Đây là text giới thiệu về Prom. Đây là text giới thiệu về Prom. Đây là text giới thiệu về Prom. Đây là text giới thiệu về Prom.`,
  tbDesktop: `Đây là text giới thiệu về TB. Đây là text giới thiệu về TB. Đây là text giới thiệu về TB. Đây là text giới thiệu về TB. Đây là text giới thiệu về TB.`
};

const en = vi;

const jp = vi;

export default (state = 'en', action) => {
  switch (action.type) {
    case VIETNAMESE:
      return vi;
    case ENGLISH:
      return en;
    case JAPANESE:
      return jp;
    default:
      return state;
  }
};
