import { CheckCircleFilled } from "@ant-design/icons"

const WhyChooseUs = () => {
  const highlights = [
    {
      title: "Hạ tầng mạnh mẽ",
      description: "Sở hữu hệ thống trung tâm dữ liệu tiêu chuẩn quốc tế và mạng lưới cáp quang rộng khắp toàn quốc.",
    },
    {
      title: "Bảo mật cao",
      description:
        "Dữ liệu của doanh nghiệp được bảo vệ bởi các giải pháp an ninh mạng hàng đầu từ Viettel Cyber Security.",
    },
    {
      title: "Hỗ trợ doanh nghiệp 24/7",
      description:
        "Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi trên khắp 63 tỉnh thành.",
    },
    {
      title: "Kinh nghiệm triển khai",
      description: "Hơn 30 năm đồng hành cùng Chính phủ và các tập đoàn lớn trong các dự án công nghệ trọng điểm.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tại sao chọn Viettel Solution?</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Viettel không chỉ cung cấp dịch vụ, chúng tôi đồng hành cùng sự phát triển bền vững của doanh nghiệp thông
              qua sức mạnh công nghệ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircleFilled className="text-[#E60000] text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/enterprise-technology-data-center-team.jpg" alt="Viettel Professional Team" className="w-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E60000] rounded-xl -z-0" />
            <div className="absolute -bottom-10 -left-10 p-8 bg-white shadow-xl rounded-xl z-20 max-w-[240px]">
              <div className="text-[#E60000] text-4xl font-black mb-1">30+</div>
              <div className="text-gray-900 font-bold text-sm uppercase tracking-wider">Năm kinh nghiệm công nghệ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
