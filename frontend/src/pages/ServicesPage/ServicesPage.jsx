import React from 'react';
import { Tabs, Card, Button, Tag, Badge } from 'antd';
import { ShoppingCartOutlined, ThunderboltFilled, WifiOutlined, MobileOutlined } from '@ant-design/icons';
import { mobilePlans, internetPlans, deviceProducts } from '../../services/mockServices';

const ServicesPage = () => {
  
  // 1. Component Card cho Gói cước (Mobile & Internet)
  const ServiceCard = ({ item, type }) => {
    const isMobile = type === 'mobile';
    return (
      <Badge.Ribbon text={item.hot ? "HOT" : (item.tag || "Mới")} color={item.hot ? "red" : "blue"}>
        <Card 
          className="h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#E60000]"
          bodyStyle={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-[#E60000] uppercase mb-1">{item.name}</h3>
            <div className="flex justify-center items-baseline text-gray-800">
              <span className="text-3xl font-extrabold">{item.price}</span>
              <span className="text-sm text-gray-500 font-medium">{item.period}</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 flex-grow">
            <div className="flex items-center gap-3 mb-2">
              {isMobile ? <ThunderboltFilled className="text-[#E60000]" /> : <WifiOutlined className="text-[#E60000]" />}
              <span className="font-bold text-lg">{isMobile ? item.data : item.bandwidth}</span>
            </div>
            <p className="text-sm text-gray-600 border-t pt-2 mt-2">
              {isMobile ? item.call : item.desc}
            </p>
          </div>

          <Button 
            type="primary" 
            size="large" 
            className="w-full bg-[#E60000] hover:!bg-red-700 font-bold h-12 rounded-lg shadow-md"
          >
            Đăng ký ngay
          </Button>
        </Card>
      </Badge.Ribbon>
    );
  };

  // 2. Component Card cho Thiết bị (Điện thoại)
  const ProductCard = ({ item }) => (
    <Card
      hoverable
      className="h-full flex flex-col overflow-hidden group"
      cover={
        <div className="h-56 bg-white flex items-center justify-center p-4 relative overflow-hidden">
           {/* Placeholder ảnh nếu không load được */}
          <div className="text-gray-300 text-6xl"><MobileOutlined /></div>
          {/* Tag giảm giá */}
          <span className="absolute top-2 left-2 bg-[#E60000] text-white text-xs font-bold px-2 py-1 rounded">
            {item.discount}
          </span>
        </div>
      }
      bodyStyle={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}
    >
      <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2 group-hover:text-[#E60000] transition-colors">
        {item.name}
      </h3>
      
      <div className="mt-auto">
        <div className="flex flex-col mb-3">
          <span className="text-[#E60000] font-bold text-xl">{item.price}</span>
          <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>
        </div>
        <Button 
          block 
          icon={<ShoppingCartOutlined />}
          className="border-[#E60000] text-[#E60000] font-semibold hover:!bg-[#E60000] hover:!text-white transition-all"
        >
          Đặt hàng
        </Button>
      </div>
    </Card>
  );

  // 3. Cấu hình nội dung các Tabs
  const tabItems = [
    {
      key: '1',
      label: <span className="px-4 text-base">Di động</span>,
      children: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 animate-fade-in">
          {mobilePlans.map((plan) => <ServiceCard key={plan.id} item={plan} type="mobile" />)}
        </div>
      ),
    },
    {
      key: '2',
      label: <span className="px-4 text-base">Internet & TV</span>,
      children: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 animate-fade-in">
          {internetPlans.map((plan) => <ServiceCard key={plan.id} item={plan} type="internet" />)}
        </div>
      ),
    },
    {
      key: '3',
      label: <span className="px-4 text-base">Thiết bị</span>,
      children: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 animate-fade-in">
          {deviceProducts.map((prod) => <ProductCard key={prod.id} item={prod} />)}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-[#E60000] to-[#FF4D4D] text-white py-16 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Thế giới Dịch vụ số</h1>
        <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
          Khám phá hệ sinh thái đa dạng của Viettel với ưu đãi độc quyền dành riêng cho bạn.
        </p>
      </div>

      {/* Tabs Container */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 min-h-[500px]">
          <Tabs 
            defaultActiveKey="1" 
            items={tabItems} 
            centered 
            size="large"
            tabBarStyle={{ 
              fontWeight: '600', 
              borderBottom: '2px solid #f0f0f0',
              marginBottom: '32px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;