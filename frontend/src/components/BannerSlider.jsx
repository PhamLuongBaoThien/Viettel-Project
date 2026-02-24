import React, { useRef } from 'react';
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bannerImg1 from "../assets/banner/banner-img-1.jpg";
import bannerImg2 from "../assets/banner/banner-img-2.jpg";
import bannerImg3 from "../assets/banner/banner-img-3.jpg";

// Danh sách hình ảnh banner (Bạn có thể thay đổi đường dẫn ảnh tại đây)
const BANNER_IMAGES = [
  {
    id: 1,
    url: bannerImg1,
    alt: "Viettel Digital Infrastructure"
  },
  {
    id: 2,
    url: bannerImg2,
    alt: "5G Technology"
  },
  {
    id: 3,
    url: bannerImg3,
    alt: "Cyber Security"
  }
];

const BannerSlider = () => {
  const carouselRef = useRef(null);

  // Hàm điều hướng slide
  const handleNext = () => carouselRef.current?.next();
  const handlePrev = () => carouselRef.current?.prev();

  return (
    <section className="relative w-full overflow-hidden group bg-gray-100">
      {/* Nút mũi tên bên trái */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-red-600/80 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex border-none cursor-pointer shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Nút mũi tên bên phải */}
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-red-600/80 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex border-none cursor-pointer shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider chính */}
      <Carousel 
        ref={carouselRef}
        autoplay 
        effect="fade" // Hiệu ứng mờ dần sang trọng
        speed={1000}
        autoplaySpeed={5000}
        dots={{ className: "custom-dots" }}
        className="w-full h-[300px] md:h-[500px] lg:h-[650px]"
      >
        {BANNER_IMAGES.map((banner) => (
          <div key={banner.id} className="outline-none">
            <div 
              className="w-full h-[300px] md:h-[500px] lg:h-[650px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ 
                backgroundImage: `url(${banner.url})`,
              }}
              role="img"
              aria-label={banner.alt}
            />
          </div>
        ))}
      </Carousel>

      {/* Lớp phủ bóng đổ nhẹ ở đáy banner để tạo chiều sâu */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      {/* CSS tùy chỉnh cho các chấm điều hướng (dots) của Antd */}
      <style>{`
        .custom-dots li button {
          background: white !important;
          opacity: 0.5;
          height: 4px !important;
          width: 20px !important;
          border-radius: 2px !important;
          transition: all 0.3s ease !important;
        }
        .custom-dots li.slick-active button {
          background: #E60000 !important; /* Màu đỏ Viettel */
          opacity: 1;
          width: 40px !important;
        }
        .custom-dots {
          bottom: 30px !important;
        }
      `}</style>
    </section>
  );
};

export default BannerSlider;