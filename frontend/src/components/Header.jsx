import { Layout, Menu, Button } from "antd"
import { PhoneOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import logoPath from "../assets/logo/viettel-telecom.png";
 
const { Header: AntHeader } = Layout

const Header = () => {

  const menuItems = [
    { key: "home", label: <Link to="/">Trang chủ</Link> },
    { key: "solutions", label:  <Link to="/solutions">Giải pháp</Link>},
    { label: <Link to="/dich-vu">Dịch vụ</Link>, key: '/dich-vu' },
    { key: "contact", label: "Liên hệ" },
  ]

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
          defaultSelectedKeys={["home"]}
          items={menuItems}
          className="hidden lg:flex border-none min-w-[500px]"
          style={{ lineHeight: "64px" }}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="text" icon={<PhoneOutlined />} className="hidden md:flex items-center font-medium">
          1800 8000
        </Button>
        <Button className="bg-[#E60000] hover:bg-[#CC0000]! text-white border-none rounded-md px-6 font-semibold h-10">
          Tư vấn ngay
        </Button>
      </div>
    </AntHeader>
  )
}

export default Header
