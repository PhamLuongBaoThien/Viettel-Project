import React from 'react';

const SolutionPage = () => {
  const solutionsData = [
    {
      id: 1,
      title: "Viettel-CA",
      description: "Viettel CA - Chữ ký số Viettel (hay còn gọi là Chứng thư số Viettel) là dịch vụ giải pháp hiện đại an toàn và bảo mật, toàn bộ thông tin dữ liệu được xử lý mã hóa và đảm bảo tính đầy đủ của doanh nghiệp. Chữ ký số dùng để ký số hóa điện tử thay cho chữ ký tay thông thường trên các loại văn bản hoặc tài liệu số thông qua mạng Internet.",
      logoText: "Viettel-CA",
      color: "#ee0033"
    },
    {
      id: 2,
      title: "S-Invoice",
      description: "S-Invoice giúp doanh nghiệp khởi tạo, lập, gửi, nhận, quản lý hóa đơn bằng phương tiện điện tử, ký bằng chữ ký số và có giá trị pháp lý như hóa đơn giấy. SInvoice phục vụ mọi khách hàng có nhu cầu, đủ điều kiện theo quy định Pháp luật. Dịch vụ cung cấp từ 2016, liên tục cải tiến đáp ứng yêu cầu sử dụng.",
      logoText: "S-Invoice",
      color: "#ee0033"
    },
    {
      id: 3,
      title: "vBHXH",
      description: "vBHXH là dịch vụ giải pháp kê khai bảo hiểm điện tử được Viettel cung cấp giúp các tổ chức doanh nghiệp, đơn vị hành chính sự nghiệp hoặc người sử dụng lao động thực hiện quản lý hồ sơ bảo hiểm xã hội điện tử, đồng thời đáp ứng đầy đủ toàn diện các chuẩn định dạng dữ liệu theo yêu cầu của cơ quan BHXH.",
      logoText: "vBHXH",
      color: "#ee0033"
    },
    {
      id: 4,
      title: "vContract",
      description: "Hợp đồng điện tử Viettel (vContract) cho phép doanh nghiệp quản lý và ký số các loại hợp đồng, tài liệu với khách hàng, đối tác qua internet. Hợp đồng điện tử Viettel đáp ứng các quy định của pháp luật và là giải pháp thay thế hợp đồng giấy hiệu quả, có giá trị pháp lý như việc ký kết hợp đồng giấy truyền thống.",
      logoText: "vContract",
      color: "#ee0033"
    },
    {
      id: 5,
      title: "Viettel Combo",
      description: "Combo được định nghĩa hình thức bán hàng kết hợp nhiều sản phẩm hoặc dịch vụ cùng với nhau, nhằm mục đích tạo ra mức chi phí tiết kiệm hơn so với khi mua đơn lẻ, đồng thời giúp thúc đẩy và khuyến khích một hoặc nhiều khách hàng đặt mua với số lượng nhiều hơn tại cùng một thời điểm.",
      logoText: "Combo",
      color: "#ee0033"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        {/* --- 1. TIÊU ĐỀ --- */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">GIẢI PHÁP NỔI BẬT</h2>
            <div className="w-20 h-1 bg-[#ee0033] mx-auto"></div>
        </div>

        {/* --- 2. LƯỚI SẢN PHẨM (CARD CHIA 2 PHẦN) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mb-20">
          {solutionsData.map((item) => (
            <div 
              key={item.id} 
              // Container chính: Viền đỏ, bo góc, ẩn phần thừa (overflow-hidden) để border con không bị lòi ra
              className="group border border-[#ee0033] rounded-3xl flex flex-col bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full overflow-hidden"
            >
              {/* --- PHẦN TRÊN: LOGO --- */}
              {/* border-b border-[#ee0033]: Tạo đường kẻ đỏ ngang ngăn cách */}
              <div className="h-40 w-full flex items-center justify-center p-4 border-b border-[#ee0033] bg-white">
                 <span className="text-4xl font-black text-[#ee0033] tracking-tighter uppercase transform group-hover:scale-110 transition-transform duration-300">
                    {item.logoText}
                 </span>
              </div>

              {/* --- PHẦN DƯỚI: NỘI DUNG --- */}
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                  <p className="text-gray-700 text-[13px] leading-relaxed mb-8 font-medium">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <button className="border border-gray-800 text-gray-800 font-semibold py-2 px-8 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm">
                      Xem chi tiết
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. PHẦN THÔNG TIN PHÁP LÝ --- */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-t border-gray-200 pt-10">
            {/* Cột Trái: Logo Viettel Telecom */}
            <div className="w-48 flex-shrink-0 flex justify-center md:justify-start">
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Viettel_Telecom_logo.svg/1200px-Viettel_Telecom_logo.svg.png" 
                    alt="Viettel Telecom" 
                    className="w-full h-auto object-contain"
                 />
            </div>

            {/* Cột Phải: Nội dung văn bản */}
            <div className="flex-1 text-xs text-gray-600 space-y-1 text-center md:text-left font-sans">
                <p className="font-bold text-gray-900 text-sm uppercase mb-2">
                    Website mua sắm online chính thức của Viettel Telecom.
                </p>
                <p>
                    Cơ quan chủ quản: Tổng Công ty Viễn thông Viettel (Viettel Telecom) - Chi nhánh Tập đoàn Công nghiệp - Viễn thông Quân đội.
                </p>
                <p>
                    Mã số doanh nghiệp: 0100109106-011 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 18/07/2005, sửa đổi lần thứ 15 ngày 18/12/2018.
                </p>
                <p>
                    Chịu trách nhiệm nội dung: Ông Hoàng Trung Thành.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SolutionPage;