export default {
  title: 'Đánh giá điểm yếu và Thử nghiệm xâm nhập (Pentest)',
  articles: [
    {
      title:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho ứng dụng di động (iOS, Android)',
      prevDesc:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho ứng dụng di động (iOS, Android) được thực hiện theo các quy trình và tiêu chuẩn đánh giá bảo mật hàng đầu (OWASP Mobile) kết hợp cùng các công cụ mạnh mẽ đáp ứng PCI DSS.',
      details: {
        intro:
          'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho ứng dụng di động (iOS, Android) được thực hiện theo các quy trình và tiêu chuẩn đánh giá bảo mật hàng đầu (OWASP Mobile) kết hợp cùng các công cụ mạnh mẽ đáp ứng PCI DSS.',
        title:
          'Quá trình đánh giá điểm yếu ATTT cho ứng dụng Mobile bao gồm các bước: ',
        step: [
          {
            title: 'Bước 1: Thu thập thông tin',
            desc: 'Thu thập tất cả thông tin liên quan đến mục tiêu cần đánh giá: Địa chỉ IP, URL cần đánh giá, thiết bị bảo vệ…Ví dụ: Các thông tin cần thu thập:',
            content: [
              {
                list: 'Xác định ngôn ngữ lập trình, framework, Lib, Web Server…',
              },
              {
                list: 'Xác định sự tồn tại của các thiết bị filter: Firewall, IPS…',
              },
            ],
          },
          {
            title: 'Bước 2: Xác định điểm yếu, lỗ hổng bảo mật',
            desc: 'Chuyên gia FAGONET sẽ sử dụng những sản phẩm dò quét hàng đầu trên thế giới như:  Burpsuite, ZAP, MobSF… để tìm kiếm, xác định các điểm yếu như:',
            content: [
              {
                list: 'Dò quét các điểm yếu liên quan quản lý dữ liệu',
              },
              {
                list: 'Dò quét các điểm yếu liên quan chức năng và kết nối mạng',
              },
              {
                list: 'Dò quét các điểm yếu liên quan đến xác thực',
              },
              {
                list: 'Dò quét các điểm yếu liên quan quản lý phiên làm việc',
              },
              {
                list: 'Dò quét các điểm yếu liên quan dữ liệu đầu vào',
              },
              {
                list: 'Dò quét các điểm yếu liên quan xử lý lỗi',
              },
              {
                list: 'Dò quét các điểm yếu liên quan mã hóa',
              },
              {
                list: 'Dò quét các điểm yếu quản lý log ',
              },
              {
                list: 'Dò quét backdoor, malware…',
              },
            ],
          },
          {
            title: 'Bước 3: Thử nghiệm xâm nhập',
            desc: 'Từ danh sách các lỗ hổng và điểm yếu bảo mật xác định được từ bước trước chúng tôi thực hiện thử nghiệm tấn công, khai thác vào các hệ thống có điểm yếu bảo mật. Công việc này được thực hiện với mục đích:',
            content: [
              {
                list: 'Xác nhận, chứng minh sự tồn tại của điểm yếu trên hệ thống.',
              },
              {
                list: 'Loại bỏ những kết quả sai mà công cụ dò quét được.',
              },
              {
                list: 'Minh họa cách thức khai thác điểm yếu, giúp khách hàng hiểu rõ mức độ nguy hiểm và ảnh hưởng của điểm yếu đối với ứng dụng Mobile.',
              },
            ],
          },
          {
            title: 'Bước 4: Tổng hợp kết quả và khuyến nghị khắc phục',
            desc: 'FAGONET sẽ tổng hợp lại tất các các thông tin thu thập được, nội dung của quá trình làm việc và kết quả thu được để đưa ra cho khách hàng báo cáo kết quả, đề xuất các phương án, giải pháp để khắc phục các lỗ hổng, điểm yếu bảo mật.',
            content: [],
          },
        ],
      },
    },
    {
      title:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống mạng (Firewall, Router, Switch layer 3)Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống mạng (Firewall, Router, Switch layer 3)',
      prevDesc:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống mạng (Firewall, Router, Switch layer 3)',
      details: {
        intro: '',
        title:
          'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống mạng (Firewall, Router, Switch layer 3) thực hiện theo các bước sau:',
        step: [
          {
            title: 'Bước 1: Thu thập thông tin',
            desc: 'Trong bước này chúng tôi thực hiện thu thập các thông tin:',
            content: [
              {
                list: 'Phạm vi, đối tượng cần đánh giá',
              },
              {
                list: 'Địa chỉ IP, thông tin ban đầu đối tượng',
              },
              {
                list: 'Các thiết bị bảo vệ',
              },
              {
                list: 'Ví dụ: Các thông tin cần thu thập:',
              },
              {
                list: 'Nhận diện thiết bị: hệ điều hành…',
              },
              {
                list: 'Các cổng dịch vụ đang mở',
              },
              {
                list: 'Có được bảo vệ bởi các thiết bị Firewall, Filter…',
              },
            ],
          },
          {
            title: 'Bước 2: Xác định điểm yếu, lỗ hổng bảo mật',
            desc: 'Chuyên gia FAGONET sẽ sử dụng những sản phẩm dò quét hàng đầu trên thế giới như:  Burpsuite, ZAP, MobSF… để tìm kiếm, xác định các điểm yếu như:',
            content: [
              {
                list: 'Dò quét các điểm yếu liên quan quản lý dữ liệu',
              },
              {
                list: 'Dò quét các điểm yếu liên quan chức năng và kết nối mạng',
              },
              {
                list: 'Dò quét các điểm yếu liên quan đến xác thực',
              },
              {
                list: 'Dò quét các điểm yếu liên quan quản lý phiên làm việc',
              },
              {
                list: 'Dò quét các điểm yếu liên quan dữ liệu đầu vào',
              },
              {
                list: 'Dò quét các điểm yếu liên quan xử lý lỗi',
              },
              {
                list: 'Dò quét các điểm yếu liên quan mã hóa',
              },
              {
                list: 'Dò quét các điểm yếu quản lý log ',
              },
              {
                list: 'Dò quét điểm yếu OS, dịch vụ',
              },
            ],
          },
          {
            title: 'Bước 3: Tổng hợp kết quả và khuyến nghị khắc phục',
            desc: 'FAGONET sẽ tổng hợp lại tất các các thông tin thu thập được, nội dung của quá trình làm việc và kết quả thu được để đưa ra cho khách hàng báo cáo kết quả, đề xuất các phương án, giải pháp để khắc phục các lỗ hổng, điểm yếu bảo mật.',
            content: [],
          },
        ],
      },
    },
    {
      title:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống Cơ sở dữ liệu (Oracle, MSSQL, MySQL,...)',
      prevDesc:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống Cơ sở dữ liệu (Oracle, MSSQL, MySQL,...)',
      details: {
        intro: '',
        title:
          'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống Cơ sở dữ liệu (Oracle, MSSQL, MySQL,...) thực hiện bao gồm các bước sau:',
        step: [
          {
            title: 'Bước 1: Thu thập thông tin',
            desc: 'Trong bước này chúng tôi thực hiện thu thập các thông tin:',
            content: [
              {
                list: 'Phạm vi, đối tượng cần đánh giá',
              },
              {
                list: 'Địa chỉ IP, Port, Tên Service/SID, thông tin ban đầu đối tượng…',
              },
              {
                list: 'Sơ đồ mạng',
              },
              {
                list: 'Các thiết bị bảo vệ',
              },
              {
                list: 'Thông tin CSDL và phiên bản',
              },
              {
                list: 'Cổng đang hoạt động ',
              },
              {
                list: 'Có được bảo vệ bởi các thiết bị Firewall, Filter…',
              },
            ],
          },
          {
            title: 'Bước 2: Xác định điểm yếu, lỗ hổng bảo mật',
            desc: 'Sử dụng các công cụ bảo mật hàng đầu: Scuba Database Vulnerability Scanner … nhằm phát hiện các lỗ hổng bảo mật bao gồm:',
            content: [
              {
                list: 'Dò quét điểm yếu phân quyền tài khoản ',
              },
              {
                list: 'Dò quét điểm yếu liên quan đến chức năng, kết nối mạng',
              },
              {
                list: 'Dò quét các điểm yếu xác thực',
              },
              {
                list: 'Dò quét backdoor, malware',
              },
              {
                list: 'Dò quét các điểm yếu xử lý dữ liệu',
              },
              {
                list: 'Dò quét điểm yếu cấu hình',
              },
              {
                list: 'Dò quét điểm yếu phiên bản, dịch vụ',
              },
            ],
          },
          {
            title: 'Bước 3: Thử nghiệm xâm nhập',
            desc: 'Từ danh sách các lỗ hổng và điểm yếu bảo mật xác định được từ bước trước chúng tôi thực hiện thử nghiệm tấn công, khai thác vào các hệ thống có điểm yếu bảo mật. Công việc này được thực hiện với mục đích:',
            content: [
              {
                list: 'Xác nhận, chứng minh sự tồn tại của điểm yếu trên hệ thống.',
              },

              {
                list: 'Loại bỏ những kết quả sai mà công cụ dò quét được.',
              },

              {
                list: 'Minh họa cách thức khai thác điểm yếu, giúp khách hàng hiểu rõ mức độ nguy hiểm và ảnh hưởng của điểm yếu đối với ứng dụng Mobile.',
              },
            ],
          },
          {
            title: 'Bước 4: Tổng hợp kết quả và khuyến nghị khắc phục',
            desc: 'FAGONET sẽ tổng hợp lại tất các các thông tin thu thập được, nội dung của quá trình làm việc và kết quả thu được để đưa ra cho khách hàng “Báo cáo tổng kết đánh giá điểm yếu ATTT cho CSDL”, đề xuất các phương án, giải pháp để khắc phục các lỗ hổng, điểm yếu bảo mật.',
            content: [],
          },
        ],
      },
    },
    {
      title:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống máy chủ (Windows, Linux, OS400, DB2,...)',
      prevDesc:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống máy chủ (Windows, Linux, OS400, DB2,...) được FAGONET xây dựng dựa trên tiêu chuẩn OSSTM và ISSAF...',
      details: {
        intro: '',
        title:
          'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống máy chủ (Windows, Linux, OS400, DB2,...) được FAGONET xây dựng dựa trên tiêu chuẩn OSSTM và ISSAF...bao gồm các bước chính sau:',
        step: [
          {
            title: 'Bước 1: Thu thập thông tin',
            desc: 'Thu thập tất cả thông tin liên quan đến mục tiêu cần đánh giá: dải IP, vùng mạng, thiết bị bảo vệ… Ví dụ: Các thông tin cần thu thập',
            content: [
              {
                list: 'Nhận diện loại hệ điều hành, phiên bản hệ điều hành trên hệ thống máy chủ.',
              },
              {
                list: 'Nhận diện các thiết bị an toàn bảo vệ cho máy chủ (Firewall, IDS/IPS…)',
              },
              {
                list: 'Xác định các cổng mở, các dịch vụ hoạt động trên các máy chủ: FTP, IIS, Telnet, DNS, E-mail, HTTP, HTTPS, Database, Remote…',
              },
            ],
          },
          {
            title: 'Bước 2: Xác định điểm yếu, lỗ hổng bảo mật',
            desc: 'Chuyên gia FAGONET sẽ sử dụng những sản phẩm dò quét hàng đầu trên thế giới như:  Mcafee Vulnerability Manager, NeXpose, Nessus, Metaspoit,… chúng tôi tìm kiếm, xác định các điểm yếu:',
            content: [
              {
                list: 'Dò quét điểm yếu phân quyền tài khoản ',
              },
              {
                list: 'Dò quét điểm yếu liên quan đến chức năng, kết nối mạng',
              },
              {
                list: 'Dò quét các điểm yếu xác thực',
              },
              {
                list: 'Dò quét backdoor, malware',
              },
              {
                list: 'Dò quét các điểm yếu xử lý dữ liệu',
              },
              {
                list: 'Dò quét điểm yếu cấu hình',
              },
              {
                list: 'Dò quét điểm yếu phiên bản, dịch vụ',
              },
            ],
          },
          {
            title: 'Bước 3: Thử nghiệm xâm nhập',
            desc: 'FAGONET sẽ tổng hợp lại tất các các thông tin thu thập được, nội dung của quá trình làm việc và kết quả thu được để đưa ra cho khách hàng báo cáo kết quả, đề xuất các phương án, giải pháp để khắc phục các lỗ hổng, điểm yếu bảo mật.',
            content: [],
          },
        ],
      },
    },
    {
      title:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống Website/Cổng thông tin điện tử',
      prevDesc:
        'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống Website/Cổng thông tin điện tử: FAGONET cung cấp dịch vụ kiểm tra, đánh giá điểm yếu/lỗ hổng ATTT cho hệ thống Website/Cổng thông tin điện tử theo cách chuyê<n></n>',
      details: {
        intro:
          'Dịch vụ đánh giá điểm yếu ATTT và Thử nghiệm xâm nhập cho hệ thống Website/Cổng thông tin điện tử:',
        title:
          'FAGONET cung cấp dịch vụ kiểm tra, đánh giá điểm yếu/lỗ hổng ATTT cho hệ thống Website/Cổng thông tin điện tử theo cách chuyên nghiệp. Quy trình và phương pháp luận thực hiện dựa trên bộ tiêu chuẩn OWASP (v4), và NIST 800-115 (Technical Guide to Information Security Testing) kết hợp cùng các công cụ mạnh mẽ đáp ứng PCI DSS. Các chuyên gia FAGONET thực hiện đánh giá thủ công với kinh nghiệm lâu năm kết hợp sử dụng các công cụ dò quét lỗ hổng bảo mật mạnh mẽ và kết hợp với đánh giá thủ công của chuyên gia. Quá trình đánh giá điểm yếu ATTT cho ứng dụng Web bao gồm các bước:',
        step: [
          {
            title: 'Bước 1: Thu thập thông tin',
            desc: 'Ví dụ: Các thông tin cần thu thập:',
            content: [
              {
                list: 'Xác định ngôn ngữ lập trình, framework, Lib, Web Server…',
              },
              {
                list: 'Xác định sự tồn tại của các thiết bị filter: Firewall, IPS…',
              },
            ],
          },
          {
            title: 'Bước 2: Xác định điểm yếu, lỗ hổng bảo mật',
            desc: 'Chuyên gia FAGONET sẽ sử dụng những sản phẩm dò quét hàng đầu trên thế giới như:  Acunetix, WebInspect, App Scan, Burpsuite, ZAP, Netsparker... để tìm kiếm, xác định các điểm yếu như:',
            content: [
              {
                list: 'Dò quét các điểm yếu cấu hình',
              },
              {
                list: 'Dò quét các điểm yếu quản lý định danh',
              },
              {
                list: 'Dò quét các điểm yếu liên quan đến quá trình xác thực',
              },
              {
                list: 'Dò quét các điểm yếu liên quan quá trình phân quyền',
              },
              {
                list: 'Dò quét các điểm yếu liên quan quản lý phiên',
              },
              {
                list: 'Dò quét các điểm yếu liên quan dữ liệu đầu vào',
              },
              {
                list: 'Dò quét các điểm yếu liên quan mã hóa',
              },
              {
                list: 'Dò quét backdoor, malware…',
              },
            ],
          },
          {
            title: 'Bước 3: Thử nghiệm xâm nhập',
            desc: 'Từ danh sách các lỗ hổng và điểm yếu bảo mật xác định được từ bước trước chúng tôi thực hiện thử nghiệm tấn công, khai thác vào các hệ thống có điểm yếu bảo mật. Công việc này được thực hiện với mục đích:',
            content: [
              {
                list: 'Xác nhận, chứng minh sự tồn tại của điểm yếu trên hệ thống.',
              },
              {
                list: 'Loại bỏ những kết quả sai mà công cụ dò quét được.',
              },
              {
                list: 'Minh họa cách thức khai thác điểm yếu, giúp khách hàng hiểu rõ mức độ nguy hiểm và ảnh hưởng của điểm yếu đối với ứng dụng Web.',
              },
            ],
          },
          {
            title: 'Tổng hợp kết quả và khuyến nghị khắc phục',
            desc: 'FAGONET sẽ tổng hợp lại tất các các thông tin thu thập được, nội dung của quá trình làm việc và kết quả thu được để đưa ra cho khách hàng báo cáo kết quả, đề xuất các phương án, giải pháp để khắc phục các lỗ hổng, điểm yếu bảo mật.',
            content: [],
          },
        ],
      },
    },
  ],
};
