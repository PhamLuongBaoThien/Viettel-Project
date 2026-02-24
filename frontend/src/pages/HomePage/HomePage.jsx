// src/pages/HomePage/HomePage.jsx
import HeroSection from "../../components/HeroSection";
import SolutionSection from "../../components/SolutionSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import CTASection from "../../components/CTASection";
import BannerSlider from "../../components/BannerSlider";

// KHÔNG import Header, Footer, Provider, ConfigProvider, Layout ở đây nữa

const HomePage = () => {
  return (
    // Sử dụng Fragment (<>...</>) hoặc div để bọc các section
    <>
      <BannerSlider />
      <HeroSection />
      <SolutionSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

export default HomePage;