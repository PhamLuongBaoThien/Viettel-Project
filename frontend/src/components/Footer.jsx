import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-[#E60000] rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg italic">V</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tighter">VIETTEL SOLUTION</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tổng công ty Giải pháp Doanh nghiệp Viettel (Viettel Solutions) là đơn vị đại diện cho Tập đoàn Công
              nghiệp - Viễn thông Quân đội làm việc với các khách hàng Chính phủ và Doanh nghiệp.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E60000] transition-colors"
              >
                <FacebookOutlined />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E60000] transition-colors"
              >
                <YoutubeOutlined />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E60000] transition-colors"
              >
                <LinkedinOutlined />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Sản phẩm tiêu biểu</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Viettel Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  vOffice - Văn phòng số
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  vContract - Ký số từ xa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  S-Invoice - Hóa đơn điện tử
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Viettel Money
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Giải pháp ngành</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính phủ điện tử
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Y tế thông minh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giáo dục số
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giao thông thông minh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Thành phố thông minh
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <EnvironmentOutlined className="text-[#E60000] mt-1" />
                <span>Số 1 Giang Văn Minh, P. Kim Mã, Q. Ba Đình, Hà Nội</span>
              </li>
              <li className="flex gap-3">
                <PhoneOutlined className="text-[#E60000] mt-1" />
                <span>Hotline: 1800 8000</span>
              </li>
              <li className="flex gap-3">
                <MailOutlined className="text-[#E60000] mt-1" />
                <span>Email: solutions@viettel.com.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Bản quyền thuộc về Tổng công ty Giải pháp Doanh nghiệp Viettel.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Điều khoản sử dụng
            </a>
            <a href="#" className="hover:text-white">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
