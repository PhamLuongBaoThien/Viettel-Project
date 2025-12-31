// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import { Layout, ConfigProvider } from "antd";

// Import Header/Footer thật vào đây (chỉnh lại đường dẫn cho đúng cấp thư mục)
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const { Content } = Layout;

const MainLayout = () => {
  return (
    // 1. Đặt ConfigProvider ở đây để Theme áp dụng cho cả Header, Footer và nội dung bên trong
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E60000",
          borderRadius: 8,
        },
      }}
    >
      <Layout className="min-h-screen bg-white">
        {/* 2. Header nằm cố định ở Layout */}
        <Header />

        {/* 3. Content chứa Outlet - Đây là nơi HomePage sẽ hiện ra */}
        <Content>
          <Outlet /> 
        </Content>

        {/* 4. Footer nằm cố định ở Layout */}
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;