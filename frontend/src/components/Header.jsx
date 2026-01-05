import { Layout, Menu, Button } from "antd"
import { PhoneOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
const { Header: AntHeader } = Layout

const Header = () => {
  const menuItems = [
    { key: "home", label: "Trang chủ" },
    { key: "solutions", label: "Giải pháp" },
    { label: <Link to="/dich-vu">Dịch vụ</Link>, key: '/dich-vu' },
    { key: "products", label: "Sản phẩm" },
    { key: "contact", label: "Liên hệ" },
  ]

  return (
    <AntHeader className="fixed w-full z-50 bg-white border-b border-gray-100 px-4 md:px-12 flex items-center justify-between h-16 shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#E60000] rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xl italic">V</span>
          </div>
          <span className="text-[#E60000] font-bold text-2xl tracking-tighter">VIETTEL</span>
        </div>

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
