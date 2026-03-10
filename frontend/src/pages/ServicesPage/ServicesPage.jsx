import React, {useState} from 'react';
import { Button, Input, Pagination, Tabs } from 'antd';
import { 
  MobileOutlined, 
  IdcardOutlined, 
  AppstoreAddOutlined, 
  GlobalOutlined, 
  SearchOutlined, 
  WifiOutlined, 
  RightOutlined,
  DollarCircleOutlined, ClockCircleOutlined, DatabaseOutlined
} from '@ant-design/icons';

// --- MOCK DATA ---
const dataPlans = [
  { id: '6SD70', name: '6SD70 - 180 ngày', data: '1GB/ngày', price: '420.000đ' },
  { id: '6SD90', name: '6SD90 - 180 ngày', data: '1,5GB/ngày', price: '540.000đ' },
  { id: '6M10', name: '6M10_100M - 180 ngày', data: '100MB/30 ngày', sms: '10 SMS nội mạng/30 ngày', price: '60.000đ' },
  { id: 'SD90', name: 'SD90 - 30 ngày', data: '1,5GB/ngày', price: '90.000đ' },
  { id: 'SD150', name: 'SD150 - 30 ngày', data: '3GB/ngày', price: '150.000đ' },
];

const simNumbers = [
  { number: '0395089043', price: '50.000đ' }, { number: '0382019581', price: '50.000đ' },
  { number: '0981234666', price: '150.000đ' }, { number: '0869999123', price: '250.000đ' }, // Số đẹp để test
  { number: '0393545060', price: '50.000đ' }, { number: '0862538416', price: '50.000đ' },
  { number: '0868888125', price: '50.000đ' }, { number: '0382650304', price: '50.000đ' },
];

const simNumbersPostpaid = [
  { number: '0379606610', price: '60.000đ' }, { number: '0385183486', price: '60.000đ' },
  { number: '0969232371', price: '60.000đ' }, { number: '0867678617', price: '60.000đ' },
  { number: '0905555666', price: '200.000đ' }, { number: '0861111123', price: '160.000đ' }, // Số đẹp để test
  { number: '0977957944', price: '60.000đ' }, { number: '0338811157', price: '60.000đ' },
];

// Dữ liệu Gói cước kèm SIM - Trả trước (đã có)
const simPlans = [
  { id: 'MXH100', name: 'MXH100 - 30 ngày', desc: '1. Chính sách gói cước- 100.000 đồng: Có 30GB (1GB/ngày), miễn phí Tiktok, Youtube, Facebook và nhắn...', price: '100.000đ' },
  { id: 'V120B', name: 'V120B - 30 ngày', desc: '1. Chính sách gói cước- 120.000 đồng: Có 45GB (1.5GB/ngày), miễn phí 10 phút đầu tiên của tất cả cuộc...', price: '120.000đ' },
  { id: 'MXH120', name: 'MXH120 - 30 ngày', desc: '1. Chính sách gói cước - 120.000 đồng: Có 30GB (1GB/ngày), miễn phí 10 phút đầu tiên của tất cả cuộc gọi...', price: '120.000đ' },
];

// THÊM MỚI: Dữ liệu Gói cước kèm SIM - Trả sau (Theo hình image_f5a2c9.png)
const simPlansPostpaid = [
  { 
    id: 'V120K', 
    name: 'V120K - Tháng', 
    desc: '1. Chính sách gói cước- 120.000 đ/tháng: Có 1.5GB/ngày, miễn phí 20 phút đầu tiên của tất cả các cuộc gọi...', 
    price: '120.000đ' 
  },
  { 
    id: 'MXH120_PS', 
    name: 'MXH120 - Tháng', 
    desc: '1. Chính sách gói cước- 120.000 đồng/tháng: Có 1GB/ngày, miễn phí 10 phút đầu tiên của tất cả các cuộc gọi...', 
    price: '120.000đ' 
  },
  { 
    id: 'MXH150', 
    name: 'MXH150 - Tháng', 
    desc: '1. Chính sách gói cước- 150.000 đồng/tháng: Có 1.5GB/ngày, miễn phí 10 phút đầu tiên của tất cả các cuộc gọi...', 
    price: '150.000đ' 
  },
];

const gtgtServices = [
  { id: 'mca', name: 'Thông báo cuộc gọi nhỡ (MCA)', desc: 'MCA là dịch vụ thông báo cuộc gọi nhỡ thông qua bản tin SMS.: Giá...', price: '5.500đ', img: 'http://media.vietteltelecom.vn/upload/ArticleService/e9/fb/be/e051adfeb7a48e5002a0c671b316e778ec558c81.jpg' },
  { id: 'mydio', name: 'MYDIO - SÁCH NÓI CHO MỌI NGƯỜI', desc: 'Dịch vụ nghe sách nói cho mọi người, có bản quyền, uy tín hàng...', price: '10.000đ', img: 'http://media.vietteltelecom.vn/upload/ArticleService/0a/d3/30/bc0438824dade6ac9a3a498e099db42a0b69f2f7.png' },
  { id: 'mecall', name: 'Dịch vụ Video chờ meCall', desc: '"Dịch vụ Video chờ meCall là dịch vụ cho phép khách hàng cài đặt...', price: 'Miễn phí', img: 'http://media.vietteltelecom.vn/upload/ArticleService/39/4e/e3/fe43bf773bca8eaf2c18918af1c9ebb04fe56f48.jpg' },
  { id: 'imuzik', name: 'Imuzik nhạc chờ', desc: 'Đa sắc màu, sống động', price: '1.000đ', img: 'http://media.vietteltelecom.vn/upload/ArticleService/8d/73/38/bf7e7eac7a9343447757003fcc06ed570bbe1a15.jpg' },
];

const intlServices = [
  { id: 'roaming', name: 'Chuyển vùng quốc tế', img: 'https://vietteltelecom.vn/images/roaming.jpg' },
  { id: 'voice', name: 'Thoại quốc tế', img: 'https://vietteltelecom.vn/images/voice_intl.jpg' },
  { id: 'sms', name: 'Nhắn tin quốc tế', img: 'https://vietteltelecom.vn/images/sms_intl.jpg' },
];

// THÊM MỚI: Dữ liệu cho tab 5G
const dataPlans5G = [
  { id: 'SD120', name: 'SD120 - 30 ngày', data: '2GB/ngày', price: '120.000đ' },
  { id: '5G160', name: '5G160 - 30 ngày', data: '6GB/ngày', price: '160.000đ' },
  { id: '5GMAX200', name: '5GMAX200 - 30 ngày', data: '8GB/ngày', utilities: 'TV360', price: '200.000đ' },
  { id: '3T5G160', name: '3T5G160 - 90 ngày', data: '6GB/ngày', price: '480.000đ' },
  { id: '5G480B', name: '5G480B - 30 ngày', data: '20GB/ngày', voice: '300p ngoại mạng, 20p/cuộc...', utilities: 'TV360, MYBOX', price: '480.000đ' },
];
const dataPlansHot = [
  { id: 'MP100GB', name: 'MP100GB - 30 ngày', data: '100GB/30 ngày', price: '0đ' },
  { id: 'MP30GB', name: 'MP30GB - 30 ngày', data: '30GB', price: '0đ' },
  { id: '5GGA3', name: '5GGA3 - 1 ngày', utilities: 'TV360', price: '3.000đ' },
  { id: 'YT5K', name: 'YT5K - 1 ngày', data: '15GB Youtube', offer: 'YOUTUBE', price: '5.000đ' },
  { id: 'T5K', name: 'T5K - 1 ngày', data: '15GB Tiktok', offer: 'TIKTOK', price: '5.000đ' },
];

const dataPlansDcom = [
  { id: 'DC5', name: 'DC5 - 24h kể từ thời điểm đăng ký', textOnly: '1GB trong 24h kể từ thời điểm đăng ký', price: '5.000đ' },
  { id: 'D10', name: 'D10 - 24h kể từ thời điểm đăng ký', textOnly: '3GB trong 24h kể từ thời điểm đăng ký', price: '10.000đ' },
  { id: 'D15', name: 'D15 - 24h kể từ thời điểm đăng ký', textOnly: '5GB trong 24h kể từ thời điểm đăng ký', price: '15.000đ' },
];

const dataPlansRoaming = [
  { id: 'USA15', name: 'USA15', price: '350.000đ', duration: '15 ngày', data: '25GB', country: 'Mỹ' },
  { id: 'NHAT15', name: 'NHAT15', price: '250.000đ', duration: '15 ngày', data: '6GB', country: 'Nhật Bản' },
  { id: 'MALAY10', name: 'MALAY10', price: '200.000đ', duration: '10 ngày', data: '16GB', country: 'Malaysia' },
  { id: 'REU15', name: 'REU15', price: '400.000đ', duration: '15 ngày', data: '5GB', country: '39 Quốc gia' },
];

const ServicesPage = () => {
const [activeTab, setActiveTab] = useState('Gói cước 4G/5G');
  const [simTab, setSimTab] = useState('Trả trước');
  
  // 1. Thêm biến theo dõi nội dung ô tìm kiếm
  const [searchQuery, setSearchQuery] = useState(''); 
  
  const displaySimNumbers = simTab === 'Trả trước' ? simNumbers : simNumbersPostpaid;

  // 2. Hàm lọc danh sách SIM thông minh
  const filteredSimNumbers = displaySimNumbers.filter(item => {
    if (!searchQuery) return true; // Nếu ô tìm kiếm trống -> Hiện tất cả
    
    let query = searchQuery.trim().toLowerCase();
    
    // Nếu nội dung tìm kiếm có chứa ký tự đặc biệt '*' hoặc 'x' (vd: 09*, *666, 086*12x)
    if (query.includes('*') || query.includes('x')) {
      // Biến đổi Hotkey thành quy tắc Regex:
      // - Dấu '*' -> '.*' (đại diện cho một cụm số bất kỳ)
      // - Chữ 'x' -> '\d' (đại diện cho 1 chữ số bất kỳ từ 0-9)
      let regexStr = '^' + query.replace(/\*/g, '.*').replace(/x/g, '\\d') + '$';
      
      try {
          const regex = new RegExp(regexStr);
          return regex.test(item.number);
      } catch {
        return item.number.includes(query); // Fallback an toàn
    }
    }
    
    // Nếu người dùng tự gõ số bình thường (vd: 039) -> Tìm theo kiểu chứa từ khóa
    return item.number.includes(query);
  });
  const tabs = ['Gói cước 4G/5G', 'Gói cước 5G', 'Gói cước Hot', 'Gói cước Dcom', 'Gói Roaming'];
  const [simPlanTab, setSimPlanTab] = useState('Trả trước');
  const displaySimPlans = simPlanTab === 'Trả trước' ? simPlans : simPlansPostpaid;
  // Xác định dữ liệu dựa trên tab đang chọn
  let displayPlans = dataPlans;
  if (activeTab === 'Gói cước 5G') displayPlans = dataPlans5G;
  else if (activeTab === 'Gói cước Hot') displayPlans = dataPlansHot;
  else if (activeTab === 'Gói cước Dcom') displayPlans = dataPlansDcom;
  else if (activeTab === 'Gói Roaming') displayPlans = dataPlansRoaming;

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      
{/* --- BANNER HEADER --- */}
      <div className="container mx-auto px-4 lg:px-12 mt-6 mb-8">
        <div 
          className="rounded-2xl relative overflow-hidden flex flex-col justify-center py-10 px-6 md:px-12 shadow-sm"
          style={{
            // Gắn ảnh nền "khung bự" bạn yêu cầu vào đây
            backgroundImage: `url('https://media.vietteltelecom.vn/upload//af/94/4a/e01ee4d04fa1072d1fa336c33afc33e4732edea5.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ee0033' // Màu nền đỏ dự phòng
          }}
        >
          {/* Nội dung chữ bên trái */}
          <div className="relative z-10 w-full md:w-2/3 lg:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
              Dịch vụ di động
            </h1>
            <p className="text-lg md:text-xl text-white font-medium mb-8 drop-shadow">
              Kết nối không giới hạn, theo cách của bạn.
            </p>
            
            {/* Các nút bấm (Navigation Tabs) trôi nổi bên trong Banner */}
            <div className="flex no-wrap gap-3 pb-2 mt-4">
              <button className="flex items-center justify-center gap-2 bg-white text-[#ee0033] px-4 py-2.5 rounded-lg rounded-bl-none font-bold shadow text-sm whitespace-nowrap border border-white hover:bg-gray-50 transition-colors">
                <MobileOutlined className="text-lg" /> Gói cước di động
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-gray-700 hover:text-[#ee0033] px-4 py-2.5 rounded-lg rounded-bl-none font-semibold shadow text-sm whitespace-nowrap border border-white transition-colors">
                <IdcardOutlined className="text-lg" /> Dịch vụ SIM số
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-gray-700 hover:text-[#ee0033] px-4 py-2.5 rounded-lg rounded-bl-none font-semibold shadow text-sm whitespace-nowrap border border-white transition-colors">
                <AppstoreAddOutlined className="text-lg" /> Dịch vụ GTGT
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-gray-700 hover:text-[#ee0033] px-4 py-2.5 rounded-lg rounded-bl-none font-semibold shadow text-sm whitespace-nowrap border border-white transition-colors">
                <GlobalOutlined className="text-lg" /> Dịch vụ quốc tế
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 1: GÓI CƯỚC DI ĐỘNG --- */}
      <div className="container mx-auto px-4 lg:px-12 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ee0033] inline-flex items-center gap-2 cursor-pointer hover:underline">
            Gói cước di động theo nhu cầu <RightOutlined className="text-xl" />
          </h2>
          
          {/* CÁC TAB ĐIỀU HƯỚNG */}
          <div className="flex justify-center gap-6 mt-4 text-gray-700 font-semibold text-sm md:text-base overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <span 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === tab 
                    ? 'text-[#ee0033] border-b-2 border-[#ee0033]' 
                    : 'hover:text-[#ee0033]'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* KHUNG HIỂN THỊ GÓI CƯỚC */}
        {activeTab === 'Gói Roaming' ? (
          
          /* --- GIAO DIỆN RIÊNG CHO TAB ROAMING --- */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPlans.map((plan, index) => (
              <div key={index} className="border-2 border-transparent hover:border-[#ff4d4f] rounded-2xl overflow-hidden bg-white flex flex-col items-center pb-6 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Header bo cong cắt lượn */}
                <div className="bg-[#ff4d4f] w-[120%] py-5 text-white text-2xl font-black rounded-b-[50%] mb-6 text-center transform -translate-y-2">
                  {plan.name}
                </div>
                
                <div className="flex flex-col gap-4 items-start w-3/4 mx-auto text-gray-700 font-semibold mb-8 text-[15px]">
                  <div className="flex items-center gap-3">
                    <DollarCircleOutlined className="text-[#ff4d4f] text-xl" /> {plan.price}
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockCircleOutlined className="text-[#ff4d4f] text-xl" /> {plan.duration}
                  </div>
                  <div className="flex items-center gap-3">
                    <DatabaseOutlined className="text-[#ff4d4f] text-xl" /> {plan.data}
                  </div>
                  <div className="flex items-center gap-3">
                    <GlobalOutlined className="text-[#ff4d4f] text-xl" /> {plan.country}
                  </div>
                </div>
                
                <button className="border border-gray-800 text-gray-800 rounded-lg px-12 py-2 font-bold hover:bg-gray-800 hover:text-white transition-colors w-3/4">
                  Đăng ký
                </button>
              </div>
            ))}
          </div>

        ) : (

          /* --- GIAO DIỆN CHUNG CHO CÁC TAB 4G/5G, HOT, DCOM --- */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Ô SỐ 1: GÓI ĐỘC QUYỀN SD30S */}
            <div className="rounded-3xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" alt="Gói độc quyền" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent p-6 flex flex-col">
                <h3 className="text-white text-xl font-bold drop-shadow-md">Gói cước độc quyền</h3>
                <h2 className="text-white text-4xl font-extrabold mb-2 drop-shadow-md">SD30S</h2>
                <p className="text-white text-base font-bold drop-shadow-md">
                  30.000đ <span className="font-normal text-sm opacity-90">có 2GB/ngày</span>
                </p>
              </div>
            </div>

            {/* CÁC Ô CÒN LẠI */}
            {displayPlans.map((plan, index) => (
              <div key={index} className="border border-gray-100 rounded-3xl rounded-bl-none overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full min-h-[320px]">
                
                <div className="bg-[#ee0033] text-white px-5 py-4 font-bold text-lg flex justify-between items-center relative overflow-hidden">
                   <span className="relative z-10">{plan.name}</span>
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 text-6xl transform rotate-12 translate-x-4">
                      <MobileOutlined />
                   </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="bg-[#f4f6f8] px-5 py-3 m-2 min-h-[96px] flex flex-col justify-center">
                    
                    {/* TRƯỜNG HỢP DCOM: Chỉ hiện Text đơn thuần */}
                    {plan.textOnly ? (
                      <div className="text-gray-800 font-semibold text-[15px]">
                        {plan.textOnly}
                      </div>
                    ) : (
                      <>
                        {/* TRƯỜNG HỢP BÌNH THƯỜNG: Hiện Data, Tiện Ích, Ưu đãi... */}
                        {plan.data && (
                          <div className="flex items-start gap-3 text-gray-700">
                            <WifiOutlined className="text-black text-xl mt-0.5" /> 
                            <span className="text-[15px]">Data: <strong className="text-black text-lg">{plan.data}</strong></span>
                          </div>
                        )}
                        
                        {plan.utilities && (
                          <div className="flex items-start gap-3 text-gray-700 mt-2 font-medium">
                            <span className="text-[10px] font-bold border border-gray-400 rounded px-1.5 py-0.5 text-gray-600 mt-0.5">Tiện ích</span> 
                            <span className="text-base font-bold text-gray-800">{plan.utilities}</span>
                          </div>
                        )}

                        {plan.offer && (
                          <div className="flex items-start gap-3 text-gray-700 mt-2 font-medium">
                            <span className="text-[10px] font-bold border border-[#ee0033] text-[#ee0033] rounded px-1.5 py-0.5 mt-0.5 bg-red-50">Ưu đãi</span> 
                            <span className="text-base font-bold text-gray-800">{plan.offer}</span>
                          </div>
                        )}
                      </>
                    )}

                  </div>
                  
                  <div className="p-5 mt-auto bg-white flex-grow flex flex-col justify-end">
                    <div className="text-[26px] font-extrabold text-gray-900 mb-6 mt-2">
                      {plan.price}
                    </div>
                    
                    <div className="flex items-center justify-between gap-4">
                      <button className="flex-1 font-bold text-gray-800 border border-gray-300 py-2.5 rounded-xl rounded-bl-none hover:bg-gray-50 hover:text-[#ee0033] hover:border-[#ee0033] transition-colors bg-white">
                        Đăng ký
                      </button>
                      <span className="text-[#ee0033] font-bold cursor-pointer text-sm whitespace-nowrap hover:underline flex items-center gap-1">
                        Xem chi tiết <RightOutlined className="text-xs" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <span className="text-gray-800 font-bold cursor-pointer hover:text-[#ee0033] text-sm md:text-base transition-all">
            Xem tất cả &gt;
          </span>
        </div>
      </div>

      {/* --- SECTION 2: GIA NHẬP CỘNG ĐỒNG THUÊ BAO --- */}
      <div className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-2xl font-bold text-[#143159] text-center mb-8">Gia nhập cộng đồng thuê bao Viettel</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            {/* Header Box 1 */}
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <div className="flex items-center gap-4">
                 <h3 className="text-lg font-bold text-gray-800">Mua sim số</h3>
                 
                 {/* Khung chứa 2 nút Trả trước / Trả sau */}
                 <div className="flex bg-gray-100 rounded-md p-0.5">
                   <button 
                     onClick={() => setSimTab('Trả trước')}
                     className={`px-3 py-1 font-medium text-sm rounded shadow-sm border transition-colors ${
                       simTab === 'Trả trước' ? 'bg-white text-[#ee0033] border-[#ee0033]' : 'text-gray-500 border-transparent hover:text-gray-800'
                     }`}
                   >
                     Trả trước
                   </button>
                   <button 
                     onClick={() => setSimTab('Trả sau')}
                     className={`px-3 py-1 font-medium text-sm rounded shadow-sm border transition-colors ${
                       simTab === 'Trả sau' ? 'bg-white text-[#ee0033] border-[#ee0033]' : 'text-gray-500 border-transparent hover:text-gray-800'
                     }`}
                   >
                     Trả sau
                   </button>
                 </div>
              </div>
              <span className="text-[#ee0033] font-medium cursor-pointer text-sm hover:underline">Xem tất cả &gt;</span>
            </div>

            {/* DÒNG CHỮ ĐIỀU KIỆN (Chỉ hiện khi chọn Trả sau) */}
            {simTab === 'Trả sau' && (
              <p className="text-gray-700 text-sm mb-4 font-medium">
                Thời gian cam kết sử dụng đối với thuê bao trả sau: 12 tháng
              </p>
            )}

            {/* Search & Hotkeys */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-2">
              {/* Ô Input Tìm Kiếm (Chiếm 50% trên máy tính) - Thêm !rounded-lg !rounded-bl-none */}
              <Input 
                placeholder="Tìm kiếm" 
                prefix={<SearchOutlined className="text-gray-400" />} 
                className="w-full lg:w-1/2 !rounded-lg !rounded-bl-none"
                size="large"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                allowClear
              />
              
              {/* Danh sách Hotkey - Bỏ border, chỉ để chữ */}
              <div className="flex items-center gap-3 flex-wrap text-[15px] w-full lg:w-1/2 lg:pl-4">
                <span className="text-gray-900 font-bold">Hot key:</span>
                {['09*', '03*', '08*', '086*', '*666', '086*123', '086*12x'].map(k => (
                  <span 
                    key={k} 
                    onClick={() => setSearchQuery(k === searchQuery ? '' : k)}
                    className={`cursor-pointer font-medium transition-colors ${
                      searchQuery === k 
                        ? 'text-[#ee0033]' // Đỏ khi được chọn
                        : 'text-gray-600 hover:text-[#ee0033]' // Xám khi chưa chọn
                    }`}
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Text hiển thị số lượng kết quả (như hình) */}
            <div className="text-sm text-gray-800 font-medium mb-4">
              Khoảng {filteredSimNumbers.length} kết quả
            </div>

           {/* Numbers Grid - Bố cục 2 cột (2x4) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 mb-6 min-h-[150px]">
              {filteredSimNumbers.length > 0 ? (
                filteredSimNumbers.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border border-gray-200 rounded-lg rounded-bl-none p-2 hover:border-[#ee0033] hover:shadow-sm transition-all bg-gray-50/40">
                    
                    {/* Dòng ghi chú đã được dời an toàn vào trong div */}
                    <span className="font-bold text-gray-900 tracking-wider text-[15px] ml-2">{item.number}</span>
                    
                    <div className="flex items-center gap-8 md:gap-12">
                      <span className="text-gray-900 text-[15px] font-medium">{item.price}</span>
                      <button className="border border-gray-800 text-gray-800 text-[13px] font-bold px-4 py-1.5 rounded-lg rounded-bl-none hover:bg-red-600 hover:text-white transition-colors">
                        Chọn ngay
                      </button>
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-500 font-medium mb-2">
                    Không tìm thấy số thuê bao nào phù hợp với từ khóa <span className="font-bold text-gray-800">"{searchQuery}"</span>
                  </p>
                  <button onClick={() => setSearchQuery('')} className="text-[#ee0033] font-bold hover:underline flex items-center gap-1">
                    Xóa bộ lọc để xem tất cả
                  </button>
                </div>
              )}
            </div>
            
            <div className="flex justify-center">
              <Pagination defaultCurrent={1} total={100} size="small" />
            </div>
          </div>

          {/* Gói cước kèm Sim */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <div className="flex items-center gap-4">
                 <h3 className="text-lg font-bold text-gray-800">Gói cước kèm Sim</h3>
                 
                 {/* Tab chuyển đổi Trả trước / Trả sau */}
                 <div className="flex bg-gray-100 rounded-md p-0.5">
                   <button 
                     onClick={() => setSimPlanTab('Trả trước')}
                     className={`px-3 py-1 font-medium text-sm rounded shadow-sm border transition-colors ${
                       simPlanTab === 'Trả trước' ? 'bg-white text-[#ee0033] border-[#ee0033]' : 'text-gray-500 border-transparent hover:text-gray-800'
                     }`}
                   >
                     Trả trước
                   </button>
                   <button 
                     onClick={() => setSimPlanTab('Trả sau')}
                     className={`px-3 py-1 font-medium text-sm rounded shadow-sm border transition-colors ${
                       simPlanTab === 'Trả sau' ? 'bg-white text-[#ee0033] border-[#ee0033]' : 'text-gray-500 border-transparent hover:text-gray-800'
                     }`}
                   >
                     Trả sau
                   </button>
                 </div>
              </div>
              <span className="text-[#ee0033] font-medium cursor-pointer text-sm hover:underline">Xem tất cả &gt;</span>
            </div>

            {/* Danh sách gói cước kèm SIM */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative">
              {displaySimPlans.map((plan, idx) => (
                <div key={idx} className="border border-gray-200 rounded-3xl rounded-bl-none overflow-hidden hover:shadow-md transition-all">
                  <div className="bg-[#ee0033] text-white px-5 py-4 font-bold text-xl relative overflow-hidden">
                    {plan.name}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 text-5xl transform rotate-12 translate-x-3">
                       <MobileOutlined />
                    </div>
                  </div>
                  
                  <div className="flex flex-col h-full">
                    {/* Vùng mô tả xám nhạt */}
                    <div className="bg-[#f4f6f8] px-5 py-4 m-2 rounded-lg min-h-[100px] flex items-center">
                      <p className="text-gray-700 text-[14px] leading-relaxed line-clamp-3 font-medium">
                        {plan.desc}
                      </p>
                    </div>
                    
                    <div className="p-5 pt-2">
                      <div className="text-2xl font-extrabold text-gray-900 mb-6">{plan.price}</div>
                      <div className="flex items-center justify-between gap-4">
                        <button className="flex-1 font-bold text-gray-800 border border-gray-300 py-2.5 rounded-xl rounded-bl-none hover:bg-gray-50 hover:text-[#ee0033] hover:border-[#ee0033] transition-colors bg-white">
                          Đăng ký
                        </button>
                        <span className="text-[#ee0033] font-bold cursor-pointer text-sm whitespace-nowrap hover:underline flex items-center gap-1">
                          Xem chi tiết <RightOutlined className="text-xs" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hai nút chức năng dưới cùng */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 border-t pt-8">
               <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl rounded-bl-none px-10 py-4 font-bold text-gray-800 hover:bg-gray-50 hover:text-[#ee0033] hover:border-[#ee0033] transition-all bg-white shadow-sm">
                  <IdcardOutlined className="text-[#ee0033] text-xl" />
                  Chuyển sang trả sau &gt;
               </button>
               <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl rounded-bl-none px-10 py-4 font-bold text-gray-800 hover:bg-gray-50 hover:text-[#ee0033] hover:border-[#ee0033] transition-all bg-white shadow-sm">
                  <IdcardOutlined className="text-[#ee0033] text-xl" />
                  Chuyển mạng giữ số &gt;
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: DỊCH VỤ GTGT --- */}
      <div className="container mx-auto px-4 lg:px-12 mt-16">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#ee0033] inline-flex items-center gap-2 cursor-pointer hover:underline">
            Dịch vụ GTGT đa dạng <RightOutlined className="text-lg" />
          </h2>
          <div className="flex justify-center flex-wrap gap-2 mt-4">
            {['Tất cả', 'Dịch vụ HOT', 'Âm nhạc', 'Tin tức', 'Giải trí', 'Tiện ích'].map((tag, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${i === 0 ? 'border-[#ee0033] text-[#ee0033]' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
           {gtgtServices.map((srv) => (
             <div key={srv.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col">
               {/* Hình ảnh placeholder sử dụng màu nền gradient để thay thế ảnh thật */}
               <div className="h-32 bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center relative overflow-hidden">
                 <img src={srv.img} alt={srv.name} onError={(e) => e.target.style.display='none'} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
               </div>
               <div className="p-4 flex flex-col flex-grow">
                 <h4 className="font-bold text-gray-900 mb-2 truncate">{srv.name}</h4>
                 <p className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed">{srv.desc}</p>
                 <div className="mt-auto flex justify-between items-center border-t pt-3">
                   <span className="font-bold text-gray-900">{srv.price}</span>
                   {srv.id === 'mecall' ? (
                      <Button size="small" type="text" className="font-semibold text-gray-800 border border-gray-300">Xem chi tiết</Button>
                   ) : (
                      <Button size="small" type="default" className="font-semibold text-gray-800 border-gray-300 hover:!border-[#ee0033] hover:!text-[#ee0033]">Đăng ký</Button>
                   )}
                 </div>
               </div>
             </div>
           ))}
        </div>
        <div className="text-center mt-6">
          <span className="text-gray-800 font-bold cursor-pointer hover:text-[#ee0033]">Xem tất cả &gt;</span>
        </div>
      </div>

      {/* --- SECTION 4: DỊCH VỤ QUỐC TẾ --- */}
      <div className="container mx-auto px-4 lg:px-12 mt-16 pb-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#ee0033] inline-flex items-center gap-2 cursor-pointer hover:underline">
            Dịch vụ quốc tế <RightOutlined className="text-lg" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intlServices.map((srv) => (
             <div key={srv.id} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer">
               <div className="h-48 bg-gray-200 overflow-hidden relative">
                 <img src={srv.img} alt={srv.name} onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80"; // Fallback image
                 }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-4 bg-white flex justify-between items-center">
                 <h4 className="font-bold text-gray-900 text-lg">{srv.name}</h4>
                 <span className="text-gray-500 text-sm group-hover:text-[#ee0033] font-medium">Xem chi tiết &gt;</span>
               </div>
             </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;