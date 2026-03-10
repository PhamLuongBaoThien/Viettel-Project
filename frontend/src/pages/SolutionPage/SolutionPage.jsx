import React, { useState } from 'react';

const ViettelSmePortal = () => {
  const [activeTab, setActiveTab] = useState('ViettelCA');

  const servicesData = {
    'ViettelCA': {
      bannerTitle: "Chữ ký số - ViettelCA",
      bannerDesc: "Dịch vụ giải pháp hiện đại an toàn và bảo mật, toàn bộ thông tin dữ liệu được xử lý mã hóa và đảm bảo tính đầy đủ của doanh nghiệp. Chữ ký số dùng để ký số hóa điện tử thay cho chữ ký tay thông thường.",
      bannerBg: "bg-gradient-to-r from-[#ee0033] to-[#b30026]",
      packages: [
        { title: "GÓI CA1", desc: "Cấp mới 1 năm Chữ ký số cho tổ chức kèm USB Token", price: "1.792.000đ" },
        { title: "GÓI CA2", desc: "Cấp mới 2 năm Chữ ký số cho tổ chức kèm USB Token", price: "2.691.000đ" },
        { title: "GÓI CA3", desc: "Cấp mới 3 năm Chữ ký số cho tổ chức kèm USB Token", price: "3.052.000đ" },
      ],
      combos: [
        { sub: "Viettel CA + BHXH", title: "GÓI CẤP MỚI CA 18 THÁNG ...", detail: "Cấp mới Chứng thư số 18 tháng kèm USB Token combo vBHXH 10 người lao động", oldPrice: "2.038.000đ", price: "1.870.000đ", discount: "-9%" },
        { sub: "Viettel CA + sInvoice", title: "GÓI CẤP MỚI CA 1 NĂM ...", detail: "Cấp mới Chứng thư số 1 năm kèm USB Token combo 300 HDDT", oldPrice: "2.255.000đ", price: "2.079.000đ", discount: "-8%" },
        { sub: "Viettel CA + BHXH", title: "GÓI CẤP MỚI CA 33 THÁNG ...", detail: "Cấp mới Chứng thư số 33 tháng kèm USB Token combo vBHXH 10 người lao động", oldPrice: "2.975.000đ", price: "2.730.000đ", discount: "-9%" },
      ]
    },
    'S-Invoice': {
      bannerTitle: "Hóa đơn điện tử - S-Invoice",
      bannerDesc: "S-Invoice giúp doanh nghiệp khởi tạo, lập, gửi, nhận, quản lý hóa đơn bằng phương tiện điện tử, ký bằng chữ ký số và có giá trị pháp lý như hóa đơn giấy.",
      bannerBg: "bg-[#ee0033]",
      packages: [
        { title: "GÓI HD_300_TT78", desc: "Gói 300 hóa đơn điện tử chuyên nghiệp", price: "421.000đ" },
        { title: "GÓI HD_500_TT78", desc: "Gói 500 hóa đơn điện tử chuyên nghiệp", price: "572.000đ" },
        { title: "GÓI HD_1K_TT78", desc: "Gói 1000 hóa đơn điện tử chuyên nghiệp", price: "896.000đ" },
      ],
      combos: [
        { sub: "Viettel CA + sInvoice", title: "GÓI CẤP MỚI CA 1 NĂM ...", detail: "Combo tiết kiệm giữa Chữ ký số và 300 Hóa đơn điện tử", oldPrice: "2.255.000đ", price: "2.079.000đ", discount: "-8%" },
        { sub: "Viettel CA + sInvoice", title: "GÓI CẤP MỚI CA 1 NĂM ...", detail: "Combo tiết kiệm giữa Chữ ký số và 500 Hóa đơn điện tử", oldPrice: "2.409.000đ", price: "2.222.000đ", discount: "-8%" },
        { sub: "Viettel CA + sInvoice", title: "GÓI CẤP MỚI CA2 1 NĂM ...", detail: "Combo tiết kiệm giữa Chữ ký số và 1000 Hóa đơn điện tử", oldPrice: "2.739.000đ", price: "2.519.000đ", discount: "-8%" },
      ]
    },
    'vBHXH': {
      bannerTitle: "Kê khai Bảo hiểm Xã hội - vBHXH",
      bannerDesc: "vBHXH hỗ trợ doanh nghiệp thực hiện quản lý hồ sơ bảo hiểm xã hội điện tử, đáp ứng đầy đủ tiêu chuẩn của cơ quan BHXH.",
      bannerBg: "bg-[#ee0033]",
      packages: [
        { title: "GÓI CẤP MỚI VBHXH 33", desc: "Gói vBHXH cơ bản cho doanh nghiệp", price: "352.000đ" },
        { title: "GÓI CẤP MỚI VBHXH 48", desc: "Gói vBHXH mở rộng cho doanh nghiệp", price: "418.000đ" },
        { title: "GÓI CẤP MỚI VBHXH 18", desc: "Gói vBHXH cao cấp cho doanh nghiệp", price: "1.210.000đ" },
      ],
      combos: [
        { sub: "Viettel CA + BHXH", title: "GÓI CA 18T + vBHXH", detail: "Combo Chữ ký số 18 tháng và phần mềm kê khai BHXH", oldPrice: "2.038.000đ", price: "1.870.000đ", discount: "-9%" },
      ]
    },
    'vContract': {
      bannerTitle: "Hợp đồng điện tử - vContract",
      bannerDesc: "Ký kết và quản lý hợp đồng trực tuyến an toàn, tiết kiệm chi phí in ấn và thời gian đi lại cho doanh nghiệp.",
      bannerBg: "bg-[#ee0033]",
      packages: [
        { title: "GÓI DÙNG THỬ", desc: "Dùng thử 20 hợp đồng trong 30 ngày", price: "0đ" },
        { title: "VCONT_100", desc: "Gói 100 hợp đồng điện tử chuyên nghiệp", price: "1.045.000đ" },
        { title: "VCONT_500", desc: "Gói 500 hợp đồng điện tử chuyên nghiệp", price: "4.500.000đ" },
      ],
      combos: []
    },
    'Combo': {
      bannerTitle: "Chính sách ưu đãi - Combo",
      bannerDesc: "Mua theo nhóm dịch vụ để nhận ưu đãi chiết khấu cao lên đến 20%, tích hợp các giải pháp thiết yếu cho doanh nghiệp mới.",
      bannerBg: "bg-gradient-to-r from-[#ee0033] to-[#4a0000]",
      isComboPage: true,
      packages: [
        { sub: "Viettel CA + sInvoice", title: "GÓI KHỞI NGHIỆP 1", detail: "CA 1 năm + 300 Hóa đơn điện tử", oldPrice: "2.255.000đ", price: "2.079.000đ", discount: "-8%" },
        { sub: "Viettel CA + BHXH", title: "GÓI KHỞI NGHIỆP 2", detail: "CA 18 tháng + vBHXH 10 lao động", oldPrice: "2.038.000đ", price: "1.870.000đ", discount: "-9%" },
        { sub: "Viettel CA + BHXH", title: "GÓI KHỞI NGHIỆP 3", detail: "CA 33 tháng + vBHXH 10 lao động", oldPrice: "2.975.000đ", price: "2.730.000đ", discount: "-9%" },
      ]
    }
  };

  const current = servicesData[activeTab];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-[#333]">
      <div className="text-center py-4 font-bold text-gray-800 uppercase tracking-widest text-lg border-b">Giải pháp CNTT</div>
      
      {/* --- MENU TABS --- */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center space-x-12">
          {Object.keys(servicesData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-5 px-2 text-sm font-bold relative transition-colors ${activeTab === tab ? "text-[#ee0033]" : "text-gray-500 hover:text-[#ee0033]"}`}
            >
              {tab === 'S-Invoice' ? 'SInvoice' : tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ee0033]"></div>}
              {tab === 'Combo' && (
                <div className="absolute -top-1 -right-6">
                    <span className="bg-[#ee0033] text-white text-[8px] px-1.5 py-0.5 rounded shadow-sm font-black">GIẢM 20%</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- BANNER ĐỘNG (Đã bỏ Image, Căn giữa nội dung) --- */}
      <div className={`${current.bannerBg} text-white transition-all duration-500`}>
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-4xl font-black mb-6 tracking-tight">{current.bannerTitle}</h2>
            <p className="text-base leading-relaxed opacity-90 max-w-3xl mx-auto mb-8">{current.bannerDesc}</p>
            <button className="bg-white text-[#ee0033] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition shadow-lg">
              Tìm hiểu thêm dịch vụ
            </button>
        </div>
      </div>

      {/* --- SEARCH / FILTER (Tab Combo) --- */}
      {current.isComboPage && (
        <div className="container mx-auto px-4 -mt-10 relative z-20">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-wrap items-center justify-center gap-8 border">
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-black uppercase text-gray-400">Dịch vụ 1</span>
                    <select className="border-2 rounded-lg px-4 py-2.5 text-sm w-56 bg-gray-50 outline-none focus:border-[#ee0033] transition"><option>Chọn dịch vụ chính</option></select>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-black uppercase text-gray-400">Dịch vụ 2</span>
                    <select className="border-2 rounded-lg px-4 py-2.5 text-sm w-56 bg-gray-50 outline-none focus:border-[#ee0033] transition"><option>Chọn dịch vụ đi kèm</option></select>
                </div>
                <button className="bg-[#ee0033] text-white px-10 py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition self-end">Tìm kiếm ngay</button>
            </div>
        </div>
      )}

      {/* --- DANH SÁCH GÓI CƯỚC (Grid Cân đối) --- */}
      <div className="container mx-auto px-4 py-20">
        
        {/* Tiêu đề phần gói cước */}
        <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Gói cước phổ biến</h3>
            <div className="w-16 h-1 bg-[#ee0033] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {current.packages.map((pkg, i) => (
                <div key={i} className="bg-white border-t-8 border-[#ee0033] rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <h3 className="font-black text-lg mb-3 uppercase text-center group-hover:text-[#ee0033] transition-colors">{pkg.title}</h3>
                    <p className="text-xs text-gray-500 text-center mb-8 h-10 leading-relaxed">{pkg.desc}</p>
                    
                    {/* Hiển thị giá cũ cho tab Combo */}
                    {pkg.oldPrice && (
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-400 line-through font-medium">{pkg.oldPrice}</span>
                            <span className="bg-[#ee0033] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{pkg.discount}</span>
                        </div>
                    )}

                    <div className="mt-auto text-center w-full">
                        <span className="text-[10px] text-gray-400 block mb-1 font-bold uppercase tracking-wider">Giá niêm yết</span>
                        <div className="text-3xl font-black text-gray-800 mb-8">{pkg.price}</div>
                        <button className="w-full bg-[#ee0033] text-white py-3.5 rounded-xl font-bold text-sm mb-4 hover:bg-red-700 shadow-lg shadow-red-100 transition-all">
                            Đăng ký ngay
                        </button>
                        <div className="flex gap-3">
                            <button className="flex-1 border-2 border-gray-100 py-2 rounded-lg text-[11px] font-black text-gray-500 hover:bg-gray-50">TƯ VẤN</button>
                            <button className="flex-1 border-2 border-gray-100 py-2 rounded-lg text-[11px] font-black text-gray-500 hover:bg-gray-50">CHI TIẾT</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- COMBO LIÊN QUAN (Chỉ hiện khi không phải tab Combo) --- */}
        {!current.isComboPage && current.combos?.length > 0 && (
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">Danh sách combo ưu đãi</h2>
                    <div className="h-[2px] bg-gray-100 flex-1 ml-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {current.combos.map((combo, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col hover:border-[#ee0033] transition-all group">
                            <div className="text-[#ee0033] text-[10px] font-black mb-2 uppercase tracking-widest">{combo.sub}</div>
                            <h4 className="font-black text-sm mb-3 h-10 group-hover:text-[#ee0033]">{combo.title}</h4>
                            <p className="text-[11px] text-gray-400 mb-8 h-10 leading-relaxed">{combo.detail}</p>
                            
                            <div className="mt-auto">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-gray-400 line-through font-bold">{combo.oldPrice}</span>
                                    <span className="bg-[#ee0033] text-white text-[10px] px-1.5 py-0.5 rounded font-black">{combo.discount}</span>
                                </div>
                                <div className="text-2xl font-black text-gray-800 mb-6">{combo.price}</div>
                                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold text-xs mb-2 hover:bg-black transition">Đăng ký combo</button>
                                <button className="w-full text-gray-400 py-2 rounded-lg text-[10px] font-black hover:text-[#ee0033] transition">XEM CHI TIẾT</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>

      {/* --- FOOTER ĐƠN GIẢN --- */}
      <div className="bg-gray-900 text-white py-10 text-center">
        <p className="text-xs opacity-50">© 2024 Viettel SME - Giải pháp chuyển đổi số toàn diện</p>
      </div>
    </div>
  );
};

export default ViettelSmePortal;