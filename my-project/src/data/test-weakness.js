import img1 from './images/test-weakness/img1.jpg';
export default {
  title: 'Kiểm tra, đánh giá điểm yếu trong mã nguồn',
  articles: [
    {
      id: 1,
      title: 'Kiểm tra, đánh giá an toàn thông tin mã nguồn của ứng dụng',
      imgUrl: img1,
      date: '12/12/2022',
      prevDesc:
        'Dịch vụ Kiểm tra, đánh giá an toàn thông tin mã nguồn của ứng dụng, các chuyên gia sẽ thực hiện dịch ngược mã nguồn của ứng dụng và thực hiện điều tra luồng dữ liệu, xác định các chức năng, cách thức ứng dụng xử lý dữ liệu, các hàm, các',
      details: {
        intro:
          'Dịch vụ Kiểm tra, đánh giá an toàn thông tin mã nguồn của ứng dụng, các chuyên gia sẽ thực hiện dịch ngược mã nguồn của ứng dụng và thực hiện điều tra luồng dữ liệu, xác định các chức năng, cách thức ứng dụng xử lý dữ liệu, các hàm, các thuật toán được sử dụng nhằm xác định các nguy cơ, lỗ hổng tồn tại trên mã nguồn của ứng dụng.',
        methods: {
          title: 'Phương thức thực hiện:',
          content: [
            {
              list: 'Phân tích thủ công',
              list: 'Phân tích tự động',
              list: 'Kết hợp thủ công và tự động',
            },
          ],
        },
        process: {
          title:
            'Các chuyên gia FAGONET thực hiện code review để đánh giá các lỗ hổng tiềm ttồn tại trên mã nguồn của ứng dụng, nội dung đánh giá đáp ứng top 10 lỗ hổng bảo mật ứng dụng theo OWSAP và top 25 lỗ hổng phần mềm theo SANS. Nội dung đánh giá cụ thể bao gồm:',
          step: [
            {
              title: 'Bước 1: Thu thập thông tin',
              content: [
                {
                  list: 'Xác định ngôn ngữ lập trình',
                },
                {
                  list: 'Xác định Framework, Lib…được sử dụng',
                },
              ],
            },
            {
              title: ' Bước 2: Xác định các điểm yếu/lỗ hổng bảo mật',
              content: [
                {
                  list: 'Dò quét các điểm yếu cấu hình',
                },
                {
                  list: 'Dò quét các điểm yếu về xác thực',
                },
                {
                  list: 'Dò quét các điểm yếu quản lý phiên',
                },
                {
                  list: 'Dò quét các điểm yếu về ủy quyền',
                },
                {
                  list: 'Dò quét điểm yếu liên quan đến dữ liệu đầu vào',
                },
                {
                  list: 'Dò quét các điểm yếu mã hóa',
                },
                {
                  list: 'Dò quét điểm yếu khả năng kiểm soát lỗi',
                },
                {
                  list: 'Dò quét các điểm yếu liên quan đến đầu ra dữ liệu',
                },
              ],
            },
            {
              title: 'Bước 3: Tổng hợp kết quả và khuyến nghị khắc phục',
              content: [
                {
                  list: 'FAGONET sẽ tổng hợp lại tất các các thông tin thu thập được, nội dung của quá trình làm việc và kết quả thu được để đưa ra cho khách hàng báo cáo kết quả, đề xuất các phương án, giải pháp để khắc phục các lỗ hổng, điểm yếu bảo mật',
                },
              ],
            },
          ],
        },
      },
    },
  ],
};
