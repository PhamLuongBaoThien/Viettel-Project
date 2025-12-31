import { Button } from "antd"
import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons"

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E60000]/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E60000]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E60000]/10 text-[#E60000] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60000]"></span>
            </span>
            Tiên phong chuyển đổi số
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight md:leading-[1.1] mb-6">
            Giải pháp Web & <br />
            <span className="text-[#E60000]">Dịch vụ số toàn diện</span> <br />
            cho doanh nghiệp Việt
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Viettel cung cấp nền tảng web bán hàng, quản lý và chuyển đổi số mạnh mẽ, giúp doanh nghiệp tối ưu vận hành
            và bứt phá doanh thu trong kỷ nguyên số.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="large"
              className="bg-[#E60000] hover:bg-[#CC0000]! text-white border-none rounded-lg px-8 py-6 h-auto text-lg font-bold flex items-center justify-center gap-2"
            >
              Tư vấn ngay <ArrowRightOutlined />
            </Button>
            <Button
              size="large"
              className="border-2 border-gray-200 hover:border-[#E60000]! hover:text-[#E60000]! rounded-lg px-8 py-6 h-auto text-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              <PlayCircleOutlined /> Xem giải pháp
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <span className="font-semibold text-gray-400 text-sm uppercase tracking-wider">Được tin dùng bởi:</span>
            <div className="flex gap-6 italic font-bold text-xl text-gray-600">
              <span>Enterprise</span>
              <span>SME</span>
              <span>Startup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
