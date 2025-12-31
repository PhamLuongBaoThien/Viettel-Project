"use client"
import { Card, Row, Col } from "antd"
import { useDispatch } from "react-redux"
import { selectService } from "../redux/serviceSlice"
import { mockServices } from "../services/mockServices"
import * as Icons from "@ant-design/icons"

const SolutionSection = () => {
  const dispatch = useDispatch()

  const handleCardClick = (service) => {
    dispatch(selectService(service))
    console.log("[v0] Selected service:", service.title)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hệ sinh thái giải pháp số</h2>
          <div className="w-20 h-1.5 bg-[#E60000] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Chúng tôi cung cấp bộ công cụ toàn diện giúp doanh nghiệp chuyển đổi số từ nền tảng hạ tầng đến quy trình
            kinh doanh.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {mockServices.map((service) => {
            const IconComponent = Icons[service.icon]
            return (
              <Col xs={24} sm={12} lg={6} key={service.id}>
                <Card
                  hoverable
                  className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl group overflow-hidden"
                  onClick={() => handleCardClick(service)}
                >
                  <div className="mb-6 w-14 h-14 bg-red-50 text-[#E60000] rounded-lg flex items-center justify-center text-2xl group-hover:bg-[#E60000] group-hover:text-white transition-colors duration-300">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E60000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-[#E60000] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Tìm hiểu thêm <Icons.ArrowRightOutlined className="ml-2" />
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </section>
  )
}

export default SolutionSection
