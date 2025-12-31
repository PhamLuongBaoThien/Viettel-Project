import { Button } from "antd"

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#E60000]" />
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Sẵn sàng chuyển đổi số cùng Viettel?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Đừng để doanh nghiệp của bạn tụt hậu trong cuộc đua số. Hãy bắt đầu hành trình nâng tầm vị thế ngay hôm nay.
        </p>
        <Button
          size="large"
          className="bg-white hover:bg-gray-100! text-[#E60000] border-none rounded-lg px-10 py-7 h-auto text-xl font-bold shadow-lg"
        >
          Đăng ký tư vấn miễn phí
        </Button>
      </div>
    </section>
  )
}

export default CTASection
