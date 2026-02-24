import React, { useRef } from 'react';
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bannerImg1 from "../assets/banner/banner-img-1.jpg";
import bannerImg2 from "../assets/banner/banner-img-2.jpg";
import bannerImg3 from "../assets/banner/banner-img-3.jpg";


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
    // THAY ĐỔI 1: Bọc thêm 1 section bên ngoài có padding trên dưới nhẹ nhàng
    <section className="w-full py-6 bg-white">
      
      {/* THAY ĐỔI 2: Thêm container mx-auto và px-4 md:px-12 để bằng đúng lề của Header */}
      <div className="container mx-auto px-4 md:px-12">
        
        {/* THAY ĐỔI 3: Thêm rounded-2xl để bo góc banner cho đẹp khi không còn tràn viền */}
        <div className="relative w-full overflow-hidden group bg-gray-100 rounded-2xl shadow-md">
          
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
            effect="fade"
            speed={1000}
            autoplaySpeed={5000}
            dots={{ className: "custom-dots" }}
            className="w-full h-[250px] md:h-[450px] lg:h-[550px]" // Đã giảm nhẹ chiều cao để phù hợp với banner không tràn viền
          >
            {BANNER_IMAGES.map((banner) => (
              <div key={banner.id} className="outline-none">
                <div 
                  className="w-full h-[250px] md:h-[450px] lg:h-[550px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
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
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

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
              bottom: 20px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;