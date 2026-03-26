import { Layout, Menu, Button, Dropdown } from "antd";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import logoPath from "../assets/logo/viettel-telecom.png";

const { Header: AntHeader } = Layout;

const Header = () => {
  const location = useLocation(); // 2. Lấy đường dẫn URL hiện tại

  // 3. Đổi 'key' của từng menu item cho trùng khớp chính xác với đường dẫn (path)
  const menuItems = [
    { key: "/", label: <Link to="/">Trang chủ</Link> },
    { key: "/solutions", label: <Link to="/solutions">Giải pháp</Link> },
    { key: "/dich-vu", label: <Link to="/dich-vu">Dịch vụ</Link> },
    { key: "/contact", label: <Link to="/contact">Liên hệ</Link> }, // Nếu contact có trang riêng, hãy đổi thành "/contact"
  ];

    // Menu thả xuống cho icon User
  const userMenuItems = [
    { key: "login", label: <Link to="/login" className="font-medium px-2 py-1 block">Đăng nhập</Link> },
    { key: "register", label: <Link to="/register" className="font-medium px-2 py-1 block text-[#E60000]">Đăng ký</Link> },
  ];
  
  return (
    <AntHeader className="sticky top-0 w-full z-50 bg-white border-b border-gray-100 px-4 md:px-12 flex items-center justify-between h-16 shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center h-full">
          <img
            src={logoPath}
            alt="Viettel Telecom"
            className="h-8 md:h-10 w-auto object-contain"
            // Nếu bạn dùng logo viettel telecom.png bản dài, hãy chỉnh h-8/h-10 cho phù hợp
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150x50?text=VIETTEL"; // Fallback nếu lỗi ảnh
            }}
          />
        </Link>

        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className="hidden lg:flex border-none min-w-[500px]"
          style={{ lineHeight: "64px" }}
        />
      </div>
      

      <div className="flex items-center gap-4">
      <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <Button
            type="text"
            icon={<UserOutlined className="text-[18px]" />}
            className="text-gray-700 hover:text-[#E60000]! flex items-center justify-center w-10 h-10 rounded-full"
          />
          
        </Dropdown>
        <div className="hidden md:block w-px h-5 bg-gray-300 mx-1"></div>


      {/* --- NÚT GỌI SỐ --- */}
        <Button
          type="text"
          icon={<PhoneOutlined />}
          className="hidden md:flex items-center font-medium"
        >
          1800 8000
        </Button>
        <Button className="bg-[#E60000] hover:bg-[#CC0000]! text-white border-none rounded-md px-6 font-semibold h-10">
          Tư vấn ngay
        </Button>
      </div>
    </AntHeader>
  );
};

export default Header;
