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
    description: "Giá hàng hóa toàn cầu đã tăng 30% trong quý này. Biên lợi nhuận đang thu hẹp nhanh chóng. Ban quản trị yêu cầu hành động ngay để duy trì hiệu quả tài chính.",
    left: {
      text: "Cắt giảm lương nhân viên 8%",
      explanation: "Cắt giảm lương giúp bảo vệ biên lợi nhuận ngắn hạn, nhưng làm tổn thương nghiêm trọng tinh thần người lao động. Một số nhân viên bắt đầu đình công hoặc nghỉ việc.",
      changes: { profit: 20, workers: -18, government: 0, community: -2 },
    },
    right: {
      text: "Chịu chi phí, giảm cổ tức ban lãnh đạo",
      explanation: "Chấp nhận giảm lợi nhuận để giữ nguyên thu nhập cho nhân viên thể hiện văn hóa nhân văn, củng cố lòng trung thành nhưng gây áp lực lớn lên dòng tiền của công ty.",
      changes: { profit: -22, workers: 12, government: 2, community: 4 },
    },
  },
  {
    id: 2,
    category: "Quan hệ cộng đồng",
    title: "Dự án công viên khu phố",
    description: "Một nhóm cư dân địa phương đề nghị công ty đồng tài trợ cho một công viên công cộng trên khu đất trống cạnh nhà máy. Truyền thông đã bắt đầu đưa tin về vụ việc.",
    left: {
      text: "Tài trợ dự án cải tạo công viên",
      explanation: "Đầu tư thiết thực vào cộng đồng mang lại sự ủng hộ to lớn từ người dân và chính quyền địa phương, nhưng tiêu tốn một khoản tiền mặt đáng kể ngoài kế hoạch.",
      changes: { profit: -20, workers: 2, government: 6, community: 18 },
    },
    right: {
      text: "Từ chối — chuyển kinh phí sang R&D",
      explanation: "Ngân sách được bảo toàn để phục vụ nghiên cứu phát triển sản phẩm giúp tạo ra công việc tốt hơn, nhưng cộng đồng địa phương bất mãn vì cảm thấy bị ngó lơ.",
      changes: { profit: 15, workers: 5, government: -2, community: -12 },
    },
  },
  {
    id: 3,
    category: "Quy định pháp luật",
    title: "Tiêu chuẩn môi trường mới",
    description: "Chính phủ đề xuất các tiêu chuẩn phát thải nghiêm ngặt có hiệu lực sau 18 tháng. Bạn có thể bắt đầu tuân thủ ngay — hoặc thuê vận động hành lang để trì hoãn quy trình.",
    left: {
      text: "Bắt đầu cải tạo xanh ngay lập tức",
      explanation: "Chủ động nâng cấp nhà máy thể hiện sự tuân thủ cao và mở ra nhiều ưu đãi thuế, nhưng đòi hỏi dòng vốn đầu tư ban đầu cực lớn làm giảm mạnh lợi nhuận.",
      changes: { profit: -26, workers: 4, government: 20, community: 12 },
    },
    right: {
      text: "Vận động hành lang để trì hoãn quy định",
      explanation: "Trì hoãn giúp công ty duy trì hoạt động cũ rẻ hơn và giữ tiền mặt, nhưng rò rỉ thông tin làm tổn hại nghiêm trọng uy tín pháp lý với các cơ quan quản lý.",
      changes: { profit: 18, workers: -2, government: -16, community: -6 },
    },
  },
  {
    id: 4,
    category: "Quan hệ lao động",
    title: "Người lao động yêu cầu tăng lương",
    description: "Công đoàn chính thức yêu cầu tăng lương 12% để bù đắp lạm phát. Họ cảnh báo sẽ phát động một cuộc đình công toàn nhà máy nếu yêu sách không được đáp ứng.",
    left: {
      text: "Đàm phán tăng lương công bằng",
      explanation: "Đáp ứng yêu cầu giúp ổn định nhân sự, ngăn chặn đình công đình trệ sản xuất, nhưng làm tăng vĩnh viễn chi phí vận hành định kỳ của doanh nghiệp.",
      changes: { profit: -24, workers: 22, government: 4, community: 2 },
    },
    right: {
      text: "Tuyển dụng lao động thay thế",
      explanation: "Bảo vệ được cấu trúc chi phí lương thấp giúp tối ưu hóa lợi nhuận, nhưng gây ra xung đột gay gắt. Thanh tra lao động vào cuộc kiểm tra tính pháp lý.",
      changes: { profit: 16, workers: -26, government: -6, community: -10 },
    },
  },
  {
    id: 5,
    category: "Quản lý khủng hoảng",
    title: "Rò rỉ dữ liệu khách hàng",
    description: "Kiểm toán nội bộ phát hiện một lượng lớn dữ liệu cá nhân của khách hàng đã bị rò rỉ. Bạn có thể công bố công khai ngay lập tức hoặc âm thầm vá lỗi để tránh dư luận.",
    left: {
      text: "Công bố đầy đủ và hỗ trợ khách hàng",
      explanation: "Minh bạch gây ra tổn thất tài chính lớn do đền bù và xử lý khủng hoảng, nhưng giữ vững được niềm tin từ cộng đồng và sự tôn trọng của cơ quan quản lý.",
      changes: { profit: -22, workers: 2, government: 18, community: 8 },
    },
    right: {
      text: "Xử lý âm thầm và thu nhỏ vụ việc",
      explanation: "Tránh được sự sụt giảm cổ phiếu và chi phí bồi thường tức thì, nhưng chứa đựng rủi ro pháp lý khổng lồ nếu các cơ quan chức năng phát hiện hành vi che giấu.",
      changes: { profit: 12, workers: -5, government: -18, community: -14 },
    },
  },
  {
    id: 6,
    category: "Chiến lược tăng trưởng",
    title: "Cơ hội mở rộng nhà máy",
    description: "Một khu đất lâm nghiệp được bảo tồn đang được rao bán giá rẻ do kẽ hở quy hoạch. Bạn có thể mua để xây nhà máy mới hoặc mở rộng ngay tại khu vực hiện tại với chi phí cao hơn.",
    left: {
      text: "Mua đất bảo tồn để xây nhà máy mới",
      explanation: "Chi phí mua đất rẻ và mặt bằng lớn giúp thúc đẩy doanh thu nhanh chóng, nhưng vấp phải sự phản đối dữ dội từ các tổ chức bảo vệ môi trường và cộng đồng cư dân.",
      changes: { profit: 25, workers: 4, government: -14, community: -20 },
    },
    right: {
      text: "Mở rộng tối ưu tại địa điểm hiện tại",
      explanation: "Con đường xây dựng bền vững tốn kém nhiều chi phí cải tạo hơn, nhưng giúp giữ gìn mối quan hệ tốt đẹp với địa phương và củng cố cam kết bảo vệ môi trường.",
      changes: { profit: -14, workers: 4, government: 8, community: 12 },
    },
  },
  {
    id: 7,
    category: "Đạo đức chuỗi cung ứng",
    title: "Lao động trẻ em ở nhà cung ứng",
    description: "Báo chí phanh phui một nhà cung ứng nguyên liệu giá rẻ chính của bạn (chiếm 40% đầu vào) sử dụng lao động trẻ vị thành niên ở nước ngoài. Bạn phải quyết định hướng xử lý.",
    left: {
      text: "Lập tức cắt đứt và tìm đối tác mới",
      explanation: "Đứng về mặt đạo đức giúp nâng cao giá trị thương hiệu và uy tín với chính phủ, nhưng việc đổi nhà cung ứng đột ngột khiến chi phí đầu vào tăng vọt và gián đoạn sản xuất.",
      changes: { profit: -28, workers: 2, government: 12, community: 18 },
    },
    right: {
      text: "Yêu cầu thay đổi và tiếp tục hợp tác",
      explanation: "Duy trì được chuỗi cung ứng giá rẻ để tối ưu lợi nhuận, nhưng làm dấy lên sự hoài nghi từ dư luận về trách nhiệm xã hội thực tế của doanh nghiệp.",
      changes: { profit: 12, workers: -6, government: -12, community: -15 },
    },
  },
  {
    id: 8,
    category: "An toàn lao động",
    title: "Nâng cấp an toàn bị trì hoãn",
    description: "Quy trình bảo dưỡng định kỳ hệ thống thiết bị đã bị hoãn một quý để kịp tiến độ đơn hàng lớn. Bộ phận kỹ thuật cảnh báo thiết bị cũ đang hoạt động quá tải và có nguy cơ mất an toàn.",
    left: {
      text: "Tiếp tục vận hành thêm một quý nữa",
      explanation: "Đạt mục tiêu sản lượng và doanh thu ngắn hạn của ban điều hành, nhưng tạo ra môi trường làm việc bất an và rủi ro bị xử phạt hành chính khi thanh tra lao động kiểm tra.",
      changes: { profit: 18, workers: -18, government: -10, community: -2 },
    },
    right: {
      text: "Tạm dừng sản xuất để bảo dưỡng",
      explanation: "Tạm ngưng dây chuyền gây thiệt hại doanh thu tức thì, nhưng bảo đảm an toàn tính mạng cho công nhân, củng cố lòng tin của người lao động vào ban quản trị.",
      changes: { profit: -22, workers: 20, government: 8, community: 2 },
    },
  },
  {
    id: 9,
    category: "Thuế doanh nghiệp",
    title: "Thiên đường thuế nước ngoài",
    description: "Giám đốc tài chính trình phương án tối ưu thuế bằng cách chuyển giao dịch thương hiệu qua một công ty con ở quốc đảo có thuế suất bằng không. Hoàn toàn hợp pháp.",
    left: {
      text: "Triển khai cấu trúc tránh thuế nước ngoài",
      explanation: "Giảm hàng triệu USD tiền thuế giúp tăng mạnh lợi nhuận ròng, nhưng bị dư luận chỉ trích là trốn tránh trách nhiệm quốc gia và làm xấu đi hình ảnh với cơ quan thuế.",
      changes: { profit: 26, workers: -4, government: -20, community: -12 },
    },
    right: {
      text: "Nộp đầy đủ thuế tại quốc gia sở tại",
      explanation: "Thực hiện đầy đủ nghĩa vụ thuế tốn kém nhiều tiền của doanh nghiệp, nhưng tạo dựng mối quan hệ chính trực, vững chắc với cơ quan quản lý và lòng tin của công chúng.",
      changes: { profit: -24, workers: 4, government: 18, community: 12 },
    },
  },
  {
    id: 10,
    category: "Ứng phó khủng hoảng",
    title: "Thảm họa thiên tai khu vực",
    description: "Lũ lụt lịch sử tàn phá nghiêm trọng thị trấn đặt nhà máy chính của bạn. Cộng đồng đang rất cần sự giúp đỡ. Bạn có thể dừng một phần sản xuất để điều xe tải hỗ trợ.",
    left: {
      text: "Tạm dừng sản xuất, cứu trợ toàn lực",
      explanation: "Hành động nhân đạo kịp thời giúp gắn kết sâu sắc với cư dân địa phương và nhận được sự khen ngợi lớn từ chính quyền, dù làm sụt giảm nghiêm trọng năng suất tuần này.",
      changes: { profit: -24, workers: 8, government: 12, community: 20 },
    },
    right: {
      text: "Giữ sản xuất, quyên góp tiền tượng trưng",
      explanation: "Duy trì hoạt động liên tục để bảo đảm doanh thu cam kết, nhưng sự đóng góp hời hợt khiến cộng đồng địa phương thất vọng trong lúc khó khăn.",
      changes: { profit: 14, workers: -2, government: -4, community: -14 },
    },
  },
  {
    id: 11,
    category: "Công nghệ",
    title: "Tự động hóa dây chuyền bằng AI",
    description: "Một hệ thống tự động hóa tích hợp trí tuệ nhân tạo có thể thay thế 25% công nhân sản xuất thủ công, nâng cao độ chính xác sản phẩm và giảm đáng kể chi phí nhân sự.",
    left: {
      text: "Triển khai tự động hóa và cắt giảm nhân sự",
      explanation: "Tiết kiệm chi phí vận hành giúp tăng mạnh lợi nhuận dài hạn, nhưng tạo ra làn sóng phản đối dữ dội từ công đoàn và làm suy giảm lòng tin của nhân viên còn lại.",
      changes: { profit: 24, workers: -24, government: -4, community: -6 },
    },
    right: {
      text: "Đầu tư đào tạo lại nhân sự để chuyển đổi",
      explanation: "Chấp nhận chi phí đào tạo lớn để giữ chân người lao động giúp ổn định nội bộ và xây dựng hình ảnh doanh nghiệp nhân văn, nhưng tốn kém nguồn lực tài chính lớn.",
      changes: { profit: -16, workers: 16, government: 6, community: 6 },
    },
  },
  {
    id: 12,
    category: "Quản trị doanh nghiệp",
    title: "Báo cáo của người tố giác nội bộ",
    description: "Một nhân viên phòng kế toán nộp đơn tố cáo nặc danh rằng trưởng bộ phận tài chính đang xào nấu số liệu doanh thu quý để đạt chỉ tiêu của hội đồng quản trị.",
    left: {
      text: "Thuê bên thứ ba điều tra độc lập công khai",
      explanation: "Đảm bảo tính chính trực đòi hỏi chi phí pháp lý và kiểm toán lớn, đồng thời có thể phơi bày yếu kém của bộ máy, nhưng củng cố niềm tin pháp lý lâu dài.",
      changes: { profit: -20, workers: 10, government: 14, community: 4 },
    },
    right: {
      text: "Bác bỏ tố cáo để bảo vệ uy tín ban quản trị",
      explanation: "Tránh được sự hoang mang của nhà đầu tư và giữ ổn định ban lãnh đạo, nhưng nếu vụ việc vỡ lở sau này sẽ kéo theo các cuộc điều tra hình sự nghiêm khắc.",
      changes: { profit: 14, workers: -14, government: -16, community: -10 },
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
      changes: { profit: -28, workers: 2, government: 14, community: 16 },
    },
    right: {
      text: "Sửa âm thầm khi xe bảo dưỡng định kỳ",
      explanation: "Báo chí sau đó phát hiện sự cố phanh và đưa tin rầm rộ. Khách hàng phẫn nộ tẩy chay thương hiệu, và cơ quan quản lý áp lệnh phạt kỷ lục vì trì hoãn công bố nguy cơ an toàn.",
      changes: { profit: 12, workers: -4, government: -18, community: -16 },
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
      changes: { profit: -12, workers: 2, government: 8, community: 8 },
    },
    right: {
      text: "Phê duyệt chiến dịch để tăng doanh số",
      explanation: "Báo cáo kiểm định độc lập vạch trần quảng cáo sai sự thật. Hiệp hội bảo vệ người tiêu dùng phát động tẩy chay và cơ quan quản lý phạt nặng vì hành vi lừa dối người dùng.",
      changes: { profit: 20, workers: -4, government: -12, community: -14 },
    },
  },
  {
    id: 15,
    category: "Văn hóa công sở",
    title: "Vấn nạn làm việc quá giờ",
    description: "Khảo sát nội bộ ẩn danh cho thấy nhân viên đang chịu áp lực cực lớn do văn hóa làm việc ngoài giờ ép buộc từ các quản lý cấp trung để kịp bàn giao dự án. Nhiều người đã kiệt sức và xin nghỉ việc.",
    left: {
      text: "Giới hạn giờ làm, tuyển thêm nhân sự",
      explanation: "Lòng tin và sức khỏe của người lao động phục hồi nhanh chóng. Chi phí tuyển dụng và vận hành tăng nhẹ, nhưng hiệu suất làm việc đường dài và độ ổn định nhân lực tăng cao.",
      changes: { profit: -20, workers: 24, government: 2, community: 4 },
    },
    right: {
      text: "Duy trì tiến độ, tặng thưởng tài chính",
      explanation: "Thưởng tiền không thể bù đắp sức khỏe thể chất và tinh thần. Nhiều nhân viên kỳ cựu từ chức, năng lực cốt lõi suy yếu và dư luận lên án gay gắt về môi trường độc hại.",
      changes: { profit: 12, workers: -16, government: -2, community: -6 },
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
      changes: { profit: -24, workers: 4, government: 12, community: 16 },
    },
    right: {
      text: "Tiếp tục dùng điện lưới than đá giá rẻ",
      explanation: "Tiết kiệm ngân sách đầu tư ban đầu, nhưng các nhóm hoạt động môi trường chỉ trích gay gắt vì lượng phát thải carbon lớn. Công ty đánh mất cơ hội tiếp cận dòng vốn ưu đãi xanh.",
      changes: { profit: 14, workers: -2, government: -10, community: -10 },
    },
  },
  {
    id: 17,
    category: "Trách nhiệm xã hội",
    title: "Quỹ xóa đói giảm nghèo",
    description: "Một tổ chức từ thiện lớn kêu gọi công ty quyên góp 5% doanh thu năm nay để hỗ trợ người nghèo tại các vùng sâu vùng xa. Ban truyền thông khuyên đây là cơ hội vàng để đánh bóng hình ảnh.",
    left: {
      text: "Quyên góp số tiền lớn cho quỹ",
      explanation: "Sự hỗ trợ nhân văn mang lại thiện cảm lớn từ chính quyền và lòng tin của cộng đồng, nhưng làm suy giảm đáng kể nguồn vốn đầu tư tái sản xuất của công ty.",
      changes: { profit: -22, workers: 2, government: 8, community: 18 },
    },
    right: {
      text: "Từ chối để tái đầu tư mở rộng sản xuất",
      explanation: "Bảo toàn vốn để mở rộng quy mô tạo thêm hàng trăm việc làm trực tiếp cho xã hội, nhưng bị dư luận chỉ trích là thờ ơ trước các hoạt động nhân đạo xã hội.",
      changes: { profit: 18, workers: 6, government: 0, community: -14 },
    },
  },
  {
    id: 18,
    category: "An ninh thông tin",
    title: "Lưu trữ dữ liệu trong nước",
    description: "Chính phủ ban hành quy định bắt buộc tất cả dữ liệu người dùng phải được lưu trữ trên hệ thống máy chủ vật lý đặt trong nước. Chi phí xây dựng và vận hành hệ thống này rất cao.",
    left: {
      text: "Xây dựng trung tâm dữ liệu nội địa",
      explanation: "Đảm bảo tuân thủ tuyệt đối quy định an ninh quốc gia giúp củng cố mối quan hệ chiến lược với chính phủ, nhưng buộc doanh nghiệp thắt chặt ngân sách các phòng ban khác.",
      changes: { profit: -20, workers: 2, government: 22, community: 10 },
    },
    right: {
      text: "Tiếp tục thuê máy chủ đám mây nước ngoài",
      explanation: "Duy trì cấu trúc chi phí CNTT tối ưu giúp bảo vệ lợi nhuận hiện tại, nhưng cơ quan chức năng cảnh báo sẽ áp dụng các lệnh đình chỉ hoạt động nếu phát hiện vi phạm.",
      changes: { profit: 14, workers: 0, government: -24, community: -8 },
    },
  },
  {
    id: 19,
    category: "Chế độ phúc lợi",
    title: "Nâng cấp gói bảo hiểm y tế",
    description: "Công đoàn đề nghị nâng cấp gói bảo hiểm y tế cho nhân viên lên mức toàn diện, bao gồm cả chăm sóc sức khỏe tinh thần và điều trị nha khoa chuyên sâu.",
    left: {
      text: "Đồng ý nâng cấp gói bảo hiểm mới",
      explanation: "Nâng cao tinh thần và thể trạng của nhân viên, giúp giảm tỷ lệ nhảy việc của các nhân sự nòng cốt, nhưng tạo thêm gánh nặng chi phí cố định đáng kể hàng tháng.",
      changes: { profit: -22, workers: 25, government: 4, community: 4 },
    },
    right: {
      text: "Giữ nguyên chế độ bảo hiểm cơ bản",
      explanation: "Kiểm soát tốt chi phí nhân sự giúp duy trì năng lực tài chính ổn định, nhưng làm giảm sự gắn kết của nhân viên, một số nhân sự giỏi bắt đầu tìm kiếm cơ hội khác.",
      changes: { profit: 12, workers: -18, government: 0, community: -2 },
    },
  },
  {
    id: 20,
    category: "Xử lý chất thải",
    title: "Hệ thống lọc nước thải mới",
    description: "Hệ thống lọc nước thải của nhà máy đã cũ. Mặc dù vẫn nằm trong ngưỡng cho phép tối thiểu của pháp luật, nước thải xả ra vẫn có màu nhẹ làm cư dân xung quanh lo lắng.",
    left: {
      text: "Đầu tư hệ thống lọc nước thế hệ mới",
      explanation: "Giải quyết triệt để nguy cơ ô nhiễm, củng cố uy tín lớn với cộng đồng cư dân địa phương và các thanh tra môi trường, nhưng đòi hỏi chi tiêu nguồn vốn rất lớn.",
      changes: { profit: -24, workers: 2, government: 12, community: 20 },
    },
    right: {
      text: "Tiếp tục vận hành và bảo trì hệ thống cũ",
      explanation: "Tiết kiệm chi phí đầu tư ban đầu giúp bảo vệ dòng tiền hoạt động, nhưng cư dân liên tục gửi đơn khiếu nại làm căng thẳng mối quan hệ với chính quyền địa phương.",
      changes: { profit: 10, workers: -2, government: -12, community: -18 },
    },
  },
];
