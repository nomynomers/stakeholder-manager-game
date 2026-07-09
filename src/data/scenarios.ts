export interface StatChanges {
  profit?: number;
  workers?: number;
  government?: number;
  community?: number;
}

export interface Choice {
  text: string;
  explanation: string;
  changes: StatChanges;
}

export interface Scenario {
  id: number;
  category: string;
  title: string;
  description: string;
  left: Choice;
  right: Choice;
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    category: "Chuỗi cung ứng",
    title: "Giá nguyên liệu tăng vọt",
    description: "Giá hàng hóa toàn cầu đã tăng 30% trong quý này. Biên lợi nhuận đang thu hẹp nhanh chóng. Hội đồng quản trị yêu cầu hành động ngay để bảo vệ lợi nhuận.",
    left: {
      text: "Cắt giảm lương nhân viên 8%",
      explanation: "Cắt giảm lương bảo vệ biên lợi nhuận trong ngắn hạn, nhưng làm nản lòng nhân viên và gây phản ứng từ công chúng — người lao động tổ chức đình công và cơ quan quản lý bắt đầu chú ý.",
      changes: { profit: 15, workers: -20, government: -5, community: -5 },
    },
    right: {
      text: "Chịu chi phí, giảm cổ tức ban lãnh đạo",
      explanation: "Chia sẻ gánh nặng công bằng xây dựng lòng trung thành của nhân viên và tạo thiện cảm với cơ quan quản lý. Lợi nhuận giảm, nhưng nền tảng lâu dài của công ty vẫn vững chắc.",
      changes: { profit: -10, workers: 8, government: 5, community: 8 },
    },
  },
  {
    id: 2,
    category: "Quan hệ cộng đồng",
    title: "Dự án công viên khu phố",
    description: "Một nhóm cư dân địa phương đang đề nghị công ty đồng tài trợ cho một công viên công cộng trên khu đất trống cạnh nhà máy. Truyền thông đã đưa tin về câu chuyện này.",
    left: {
      text: "Tài trợ dự án cải tạo công viên",
      explanation: "Đầu tư nhìn thấy được vào cộng đồng mang lại thiện chí thực sự và sự ủng hộ của cơ quan quản lý. Đây còn là câu chuyện ý nghĩa cho thương hiệu công ty — dù tốn kém.",
      changes: { profit: -8, workers: 5, government: 10, community: 20 },
    },
    right: {
      text: "Từ chối — chuyển kinh phí sang R&D",
      explanation: "Ngân sách ngắn hạn được bảo vệ, nhưng sự bất mãn của cộng đồng gia tăng. Các quan chức địa phương bắt đầu kiểm tra giấy phép hoạt động của bạn kỹ lưỡng hơn.",
      changes: { profit: 5, workers: 0, government: -8, community: -15 },
    },
  },
  {
    id: 3,
    category: "Quy định pháp luật",
    title: "Tiêu chuẩn môi trường mới",
    description: "Chính phủ đề xuất các tiêu chuẩn phát thải nghiêm ngặt có hiệu lực sau 18 tháng. Bạn có thể bắt đầu tuân thủ ngay — hoặc thuê vận động hành lang để trì hoãn.",
    left: {
      text: "Bắt đầu cải tạo xanh ngay lập tức",
      explanation: "Tuân thủ sớm thể hiện sự chính trực và mở ra các ưu đãi từ chính phủ. Người lao động tự hào về cơ sở sạch hơn. Cộng đồng nhận ra nỗ lực thực sự của công ty.",
      changes: { profit: -15, workers: 8, government: 22, community: 20 },
    },
    right: {
      text: "Vận động hành lang để trì hoãn quy định",
      explanation: "Kéo dài thời gian tiết kiệm vốn trong ngắn hạn, nhưng thông tin bị rò rỉ. Niềm tin từ cơ quan quản lý sụp đổ và các nhóm cộng đồng phát động chiến dịch tẩy chay.",
      changes: { profit: 10, workers: -5, government: -28, community: -18 },
    },
  },
  {
    id: 4,
    category: "Quan hệ lao động",
    title: "Người lao động yêu cầu tăng lương",
    description: "Công đoàn đã chính thức yêu cầu tăng lương 12%, viện dẫn lạm phát và lợi nhuận kỷ lục của công ty năm ngoái. Một cuộc đình công đang được xem xét.",
    left: {
      text: "Đàm phán tăng lương công bằng",
      explanation: "Gặp nhau ở giữa giảm tỷ lệ nghỉ việc và ngăn chặn đình công thiệt hại. Cơ quan quản lý đánh giá cao cách tiếp cận hợp tác và công chúng phản ứng tích cực.",
      changes: { profit: -12, workers: 22, government: 8, community: 6 },
    },
    right: {
      text: "Tuyển dụng lao động thay thế",
      explanation: "Chi phí tức thời thấp hơn, nhưng động thái này gây phẫn nộ. Nhân viên có kinh nghiệm rời đi, năng suất giảm, và thanh tra lao động đến kiểm tra.",
      changes: { profit: 5, workers: -30, government: -12, community: -18 },
    },
  },
  {
    id: 5,
    category: "Quản lý khủng hoảng",
    title: "Rò rỉ dữ liệu khách hàng",
    description: "Kiểm toán nội bộ phát hiện 200.000 hồ sơ khách hàng đã bị lộ sáu tuần trước. Bạn có thể công bố công khai ngay — hoặc cố gắng xử lý âm thầm.",
    left: {
      text: "Công bố đầy đủ và cung cấp bảo vệ miễn phí",
      explanation: "Minh bạch gây đau đớn nhưng xây dựng lại niềm tin nhanh hơn. Cơ quan quản lý đánh giá cao sự hợp tác và người lao động tự hào về quyết định đạo đức này.",
      changes: { profit: -15, workers: 6, government: 22, community: 12 },
    },
    right: {
      text: "Xử lý âm thầm và thu nhỏ vụ việc",
      explanation: "Vụ che giấu cuối cùng bị nhà báo phát hiện. Bê bối kéo theo chi phí còn lớn hơn nhiều so với việc công bố, và cơ quan quản lý áp dụng mức phạt tối đa.",
      changes: { profit: -5, workers: -8, government: -32, community: -22 },
    },
  },
  {
    id: 6,
    category: "Chiến lược tăng trưởng",
    title: "Cơ hội mở rộng nhà máy",
    description: "Một khu rừng được bảo vệ đang được rao bán với giá chỉ bằng một phần thị trường do lỗ hổng quy hoạch. Ngoài ra, bạn có thể mở rộng theo chiều dọc tại địa điểm hiện tại.",
    left: {
      text: "Mua và phát triển khu rừng",
      explanation: "Mua đất nhanh chóng đẩy nhanh tăng trưởng, nhưng các nhóm môi trường phát động chiến dịch quy mô lớn. Giấy phép trở thành cuộc chiến chính trị dai dẳng.",
      changes: { profit: 20, workers: 5, government: -22, community: -28 },
    },
    right: {
      text: "Mở rộng bền vững tại địa điểm hiện tại",
      explanation: "Con đường tốn kém hơn mang lại chứng nhận 'doanh nghiệp có trách nhiệm' mở ra thị trường mới. Quan hệ với cộng đồng và chính phủ được củng cố.",
      changes: { profit: -5, workers: 5, government: 12, community: 18 },
    },
  },
  {
    id: 7,
    category: "Đạo đức chuỗi cung ứng",
    title: "Lao động trẻ em trong chuỗi cung ứng",
    description: "Một phóng sự điều tra tiết lộ nhà cung cấp nước ngoài chủ chốt của bạn sử dụng lao động trẻ vị thành niên. Nhà cung cấp này cung cấp 40% nguyên liệu với giá ưu đãi.",
    left: {
      text: "Lập tức cắt đứt và tìm nhà cung cấp đạo đức",
      explanation: "Cắt đứt quan hệ tốn kém và gián đoạn, nhưng lập trường đạo đức là rõ ràng. Sự khen ngợi từ chính phủ, niềm tin cộng đồng và vị thế thương hiệu cao cấp theo sau.",
      changes: { profit: -22, workers: 5, government: 18, community: 25 },
    },
    right: {
      text: "Tiếp tục và âm thầm gây áp lực với nhà cung cấp",
      explanation: "Câu chuyện lan rộng dù sao. Khách hàng tẩy chay, điều tra của chính phủ bắt đầu, và người lao động xấu hổ khi đeo huy hiệu công ty.",
      changes: { profit: 8, workers: -12, government: -18, community: -28 },
    },
  },
  {
    id: 8,
    category: "An toàn lao động",
    title: "Nâng cấp an toàn bị trì hoãn",
    description: "Việc nâng cấp hệ thống an toàn theo lịch đã bị hoãn lại quý trước để đáp ứng tiến độ sản xuất. Các kỹ sư cảnh báo thiết bị cũ đặt ra rủi ro thực sự cho người lao động.",
    left: {
      text: "Bỏ qua nâng cấp thêm một quý nữa",
      explanation: "Mục tiêu sản xuất được đáp ứng, nhưng một sự cố suýt xảy ra được báo cáo. Cơ quan quản lý đặt cơ sở vào diện giám sát tăng cường và lo lắng của người lao động lên đỉnh điểm.",
      changes: { profit: 15, workers: -22, government: -18, community: -8 },
    },
    right: {
      text: "Tạm dừng sản xuất và hoàn tất nâng cấp",
      explanation: "Tạm dừng hai tuần tốn kém, nhưng cơ sở được khen thưởng về an toàn. Sự tự tin của người lao động tăng lên và công ty tránh được một tai nạn có thể thảm khốc.",
      changes: { profit: -14, workers: 18, government: 12, community: 8 },
    },
  },
  {
    id: 9,
    category: "Thuế doanh nghiệp",
    title: "Đề xuất thiên đường thuế nước ngoài",
    description: "Giám đốc tài chính đã xác định một cấu trúc hợp pháp để chuyển 60% lợi nhuận qua vùng thuế thấp, tiết kiệm hàng triệu mỗi năm. Hoàn toàn hợp pháp.",
    left: {
      text: "Triển khai cơ cấu nước ngoài",
      explanation: "Lợi nhuận tăng vọt, nhưng nhà báo phơi bày sắp xếp này là 'hợp pháp nhưng cực kỳ bất công.' Niềm tin công chúng xói mòn và các quan chức chính phủ tuyên bố sẽ đóng lỗ hổng.",
      changes: { profit: 22, workers: -5, government: -30, community: -18 },
    },
    right: {
      text: "Nộp đầy đủ thuế trong nước",
      explanation: "Đóng thuế đúng phần tốn kém nhưng mang lại thiện chí chính trị thực sự và sự tôn trọng của cộng đồng. Điều này cũng bảo vệ bạn khỏi làn sóng luật chống doanh nghiệp.",
      changes: { profit: -15, workers: 5, government: 22, community: 18 },
    },
  },
  {
    id: 10,
    category: "Ứng phó khủng hoảng",
    title: "Thảm họa lũ lụt khu vực",
    description: "Lũ lụt nghiêm trọng đã tàn phá một thị trấn gần cơ sở chính của bạn. Hàng trăm gia đình phải di dời. Mạng lưới hậu cần của bạn có thể giúp đỡ — nhưng sản xuất sẽ phải tạm dừng.",
    left: {
      text: "Quyên góp nguồn lực và tạm dừng sản xuất",
      explanation: "Cử chỉ nhân đạo mang lại lòng trung thành sâu sắc của cộng đồng, đưa tin trên truyền thông quốc gia và sự công nhận của chính phủ — loại thiện chí mà tiền không thể mua được.",
      changes: { profit: -10, workers: 10, government: 15, community: 28 },
    },
    right: {
      text: "Duy trì sản xuất, quyên góp tượng trưng",
      explanation: "Đóng góp tượng trưng không thể đánh lừa ai. Cộng đồng địa phương cảm thấy bị bỏ rơi, và sự tương phản với sự hào phóng của các đối thủ càng khuếch đại thiệt hại.",
      changes: { profit: 10, workers: -5, government: -6, community: -20 },
    },
  },
  {
    id: 11,
    category: "Công nghệ",
    title: "Quyết định tự động hóa bằng AI",
    description: "Một nền tảng AI mới có thể tự động hóa 25% dây chuyền sản xuất — xóa bỏ 180 vị trí nhưng cắt giảm chi phí đáng kể và tăng chất lượng đầu ra.",
    left: {
      text: "Tự động hóa và sa thải người lao động",
      explanation: "Lợi ích hiệu quả là ngay lập tức, nhưng các vụ sa thải kích hoạt đình công của công đoàn và biểu tình tại trụ sở. Cơ quan quản lý mở điều tra tác động thị trường lao động.",
      changes: { profit: 22, workers: -32, government: -8, community: -12 },
    },
    right: {
      text: "Tự động hóa và đào tạo lại người lao động",
      explanation: "Quá trình chuyển đổi tốn kém hơn, nhưng người lao động bị ảnh hưởng chuyển sang các vai trò đòi hỏi kỹ năng cao hơn. Câu chuyện trở thành nghiên cứu điển hình quốc gia về tự động hóa có trách nhiệm.",
      changes: { profit: -8, workers: 20, government: 8, community: 12 },
    },
  },
  {
    id: 12,
    category: "Quản trị doanh nghiệp",
    title: "Báo cáo của người tố giác nội bộ",
    description: "Một nhân viên nội bộ đã nộp báo cáo chính thức cáo buộc nhóm tài chính của bạn đang thao túng kết quả hàng quý để đáp ứng kỳ vọng của nhà đầu tư.",
    left: {
      text: "Hỗ trợ người tố giác và điều tra công khai",
      explanation: "Đau đớn nhưng cần thiết. Điều tra minh bạch ngăn chặn một vụ bê bối tồi tệ hơn nhiều. Người lao động tôn trọng sự chính trực, và cơ quan quản lý ghi nhận sự tự sửa chữa.",
      changes: { profit: -12, workers: 16, government: 18, community: 10 },
    },
    right: {
      text: "Bác bỏ và bịt miệng nhân viên",
      explanation: "Hành động trả đũa bị rò rỉ ngay lập tức. Cơ quan quản lý tiến hành kiểm toán toàn diện, người lao động mất niềm tin vào ban lãnh đạo, và chi phí pháp lý kéo dài nhiều năm.",
      changes: { profit: 5, workers: -22, government: -25, community: -18 },
    },
  },
  {
    id: 13,
    category: "Chất lượng sản phẩm",
    title: "Lỗi hệ thống phanh xe",
    description: "Một linh kiện trong hệ thống phanh của dòng xe mới bán chạy nhất bị phát hiện có thể gặp sự cố dưới điều kiện thời tiết khắc nghiệt. Chưa có tai nạn nào xảy ra, nhưng thu hồi toàn bộ dòng xe này sẽ tốn kém chi phí khổng lồ.",
    left: {
      text: "Thu hồi tự nguyện công khai lập tức",
      explanation: "Quyết định bảo đảm an toàn xây dựng sự tin cậy lâu dài sâu sắc từ cộng đồng và chính phủ. Lợi nhuận giảm mạnh do chi phí kỹ thuật, nhưng danh tiếng thương hiệu của bạn được cứu vãn.",
      changes: { profit: -22, workers: 5, government: 15, community: 20 },
    },
    right: {
      text: "Sửa âm thầm khi xe bảo dưỡng định kỳ",
      explanation: "Báo chí sau đó phát hiện sự cố phanh và đưa tin rầm rộ. Khách hàng phẫn nộ tẩy chay thương hiệu, và cơ quan quản lý áp lệnh phạt kỷ lục vì trì hoãn công bố nguy cơ an toàn.",
      changes: { profit: 5, workers: -5, government: -28, community: -25 },
    },
  },
  {
    id: 14,
    category: "Đạo đức tiếp thị",
    title: "Quảng cáo phóng đại công dụng",
    description: "Đội ngũ marketing đề xuất chiến dịch quảng cáo tuyên bố dòng sản phẩm tiêu dùng mới của bạn hoàn toàn làm bằng nguyên liệu hữu cơ tự nhiên, mặc dù thực tế công ty vẫn sử dụng một lượng nhỏ hóa chất bảo quản để kéo dài hạn sử dụng.",
    left: {
      text: "Yêu cầu thay đổi, công bố trung thực",
      explanation: "Duy trì tính trung thực giúp công ty tránh được các rủi ro pháp lý và tranh chấp kiện cáo sau này. Chiến dịch kém bùng nổ hơn, nhưng vị thế thương hiệu lâu dài được giữ sạch.",
      changes: { profit: -5, workers: 5, government: 10, community: 12 },
    },
    right: {
      text: "Phê duyệt chiến dịch để tăng doanh số",
      explanation: "Báo cáo kiểm định độc lập vạch trần quảng cáo sai sự thật. Hiệp hội bảo vệ người tiêu dùng phát động tẩy chay và cơ quan quản lý phạt nặng vì hành vi lừa dối người dùng.",
      changes: { profit: 15, workers: -5, government: -18, community: -20 },
    },
  },
  {
    id: 15,
    category: "Văn hóa công sở",
    title: "Vấn nạn làm việc quá giờ",
    description: "Kháo sát nội bộ ẩn danh cho thấy nhân viên đang chịu áp lực cực lớn do văn hóa làm việc ngoài giờ ép buộc từ các quản lý cấp trung để kịp bàn giao dự án. Nhiều người đã kiệt sức và xin nghỉ việc.",
    left: {
      text: "Giới hạn giờ làm, tuyển thêm nhân sự",
      explanation: "Lòng tin và sức khỏe của người lao động phục hồi nhanh chóng. Chi phí tuyển dụng và vận hành tăng nhẹ, nhưng hiệu suất làm việc đường dài và độ ổn định nhân lực tăng cao.",
      changes: { profit: -12, workers: 24, government: 5, community: 8 },
    },
    right: {
      text: "Duy trì tiến độ, tặng thưởng tài chính",
      explanation: "Thưởng tiền không thể bù đắp sức khỏe thể chất và tinh thần. Nhiều nhân viên kỳ cựu từ chức, năng lực cốt lõi suy yếu và dư luận lên án gay gắt về môi trường độc hại.",
      changes: { profit: 8, workers: -22, government: -5, community: -10 },
    },
  },
  {
    id: 16,
    category: "Năng lượng xanh",
    title: "Chuyển dịch năng lượng tái tạo",
    description: "Có đề xuất đầu tư lắp đặt hệ thống điện mặt trời áp mái và sử dụng 100% năng lượng tái tạo cho toàn bộ chuỗi nhà máy. Chi phí đầu tư ban đầu rất cao và làm giảm dòng tiền nhàn rỗi.",
    left: {
      text: "Đầu tư chuyển dịch năng lượng sạch",
      explanation: "Hành động dẫn đầu xu thế bảo vệ môi trường mang lại điểm cộng cực lớn đối với chính quyền địa phương và các chứng chỉ xanh quốc tế. Khách hàng ủng hộ mạnh mẽ thương hiệu bền vững.",
      changes: { profit: -18, workers: 5, government: 16, community: 22 },
    },
    right: {
      text: "Tiếp tục dùng điện lưới than đá giá rẻ",
      explanation: "Tiết kiệm ngân sách đầu tư ban đầu, nhưng các nhóm hoạt động môi trường chỉ trích gay gắt vì lượng phát thải carbon lớn. Công ty đánh mất cơ hội tiếp cận dòng vốn ưu đãi xanh.",
      changes: { profit: 10, workers: 0, government: -12, community: -15 },
    },
  },
];
