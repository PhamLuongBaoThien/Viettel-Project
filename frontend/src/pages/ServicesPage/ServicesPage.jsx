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
  { number: '0347103591', price: '50.000đ' }, { number: '0365883437', price: '50.000đ' },
  { number: '0393545060', price: '50.000đ' }, { number: '0862538416', price: '50.000đ' },
  { number: '0359739195', price: '50.000đ' }, { number: '0382650304', price: '50.000đ' },
];

const simPlans = [
  { id: 'MXH100', name: 'MXH100 - 30 ngày', desc: '1. Chính sách gói cước - 100.000 đồng: Có 30GB (1GB/ngày), miễn phí Tiktok, Youtube, Facebook và nhắn...', price: '100.000đ' },
  { id: 'V120B', name: 'V120B - 30 ngày', desc: '1. Chính sách gói cước - 120.000 đồng: Có 45GB (1.5GB/ngày), miễn phí 10 phút đầu tiên của tất cả cuộc...', price: '120.000đ' },
  { id: 'MXH120', name: 'MXH120 - 30 ngày', desc: '1. Chính sách gói cước - 120.000 đồng: Có 30GB (1GB/ngày), miễn phí 10 phút đầu tiên của tất cả cuộc gọi...', price: '120.000đ' },
];

const gtgtServices = [
  { id: 'mca', name: 'Thông báo cuộc gọi nhỡ (MCA)', desc: 'MCA là dịch vụ thông báo cuộc gọi nhỡ thông qua bản tin SMS.: Giá...', price: '5.500đ', img: 'https://vietteltelecom.vn/images/mca.jpg' },
  { id: 'mydio', name: 'MYDIO - SÁCH NÓI CHO MỌI NGƯỜI', desc: 'Dịch vụ nghe sách nói cho mọi người, có bản quyền, uy tín hàng...', price: '10.000đ', img: 'https://vietteltelecom.vn/images/mydio.jpg' },
  { id: 'mecall', name: 'Dịch vụ Video chờ meCall', desc: '"Dịch vụ Video chờ meCall là dịch vụ cho phép khách hàng cài đặt...', price: 'Miễn phí', img: 'https://vietteltelecom.vn/images/mecall.jpg' },
  { id: 'imuzik', name: 'Imuzik nhạc chờ', desc: 'Đa sắc màu, sống động', price: '1.000đ', img: 'https://vietteltelecom.vn/images/imuzik.jpg' },
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
  const tabs = ['Gói cước 4G/5G', 'Gói cước 5G', 'Gói cước Hot', 'Gói cước Dcom', 'Gói Roaming'];
  
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
                 <div className="flex bg-gray-100 rounded-md p-0.5">
                   <button className="px-3 py-1 bg-white text-[#ee0033] font-medium text-sm rounded shadow-sm border border-[#ee0033]">Trả trước</button>
                   <button className="px-3 py-1 text-gray-500 font-medium text-sm hover:text-gray-800">Trả sau</button>
                 </div>
              </div>
              <span className="text-[#ee0033] font-medium cursor-pointer text-sm">Xem tất cả &gt;</span>
            </div>

            {/* Search & Hotkeys */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input 
                placeholder="Tìm kiếm" 
                prefix={<SearchOutlined className="text-gray-400" />} 
                className="md:max-w-md rounded-md"
                size="large"
              />
              <div className="flex items-center gap-2 flex-wrap text-sm">
                <span className="text-gray-500">Hot key:</span>
                {['09*', '03*', '08*', '086*', '*666', '086*123', '086*12x'].map(k => (
                  <span key={k} className="cursor-pointer hover:text-[#ee0033]">{k}</span>
                ))}
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {simNumbers.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border border-gray-200 rounded-md p-3 hover:border-[#ee0033] hover:shadow-sm transition-all bg-gray-50/50">
                  <span className="font-bold text-gray-800 tracking-wider">{item.number}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-sm">{item.price}</span>
                    <button className="border border-gray-800 text-gray-800 text-xs font-semibold px-2 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors">Chọn ngay</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Pagination defaultCurrent={1} total={100} size="small" />
            </div>
          </div>

          {/* Gói cước kèm SIM */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <div className="flex items-center gap-4">
                 <h3 className="text-lg font-bold text-gray-800">Gói cước kèm Sim</h3>
                 <div className="flex bg-gray-100 rounded-md p-0.5">
                   <button className="px-3 py-1 bg-white text-[#ee0033] font-medium text-sm rounded shadow-sm border border-[#ee0033]">Trả trước</button>
                   <button className="px-3 py-1 text-gray-500 font-medium text-sm hover:text-gray-800">Trả sau</button>
                 </div>
              </div>
              <span className="text-[#ee0033] font-medium cursor-pointer text-sm">Xem tất cả &gt;</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative">
              {simPlans.map((plan, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-[#ee0033] text-white p-4">
                    <h4 className="font-bold text-xl">{plan.name}</h4>
                  </div>
                  <div className="p-4 flex flex-col h-[200px]">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{plan.desc}</p>
                    <div className="text-xl font-bold text-gray-900 mt-auto mb-4">{plan.price}</div>
                    <div className="flex gap-2">
                      <Button type="default" className="flex-1 font-semibold hover:!border-[#ee0033] hover:!text-[#ee0033]">Đăng ký</Button>
                      <Button type="text" className="text-gray-600 hover:!text-[#ee0033] font-medium text-sm px-2">Xem chi tiết &gt;</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#ee0033] transition-colors bg-gray-50/50">
                  <MobileOutlined className="text-[#ee0033]" /> Chuyển sang trả sau &gt;
               </button>
               <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#ee0033] transition-colors bg-gray-50/50">
                  <IdcardOutlined className="text-[#ee0033]" /> Chuyển mạng giữ số &gt;
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