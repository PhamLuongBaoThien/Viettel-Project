// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import SolutionPage from "../pages/SolutionPage/SolutionPage";

// ... import các trang khác

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // <--- Layout bọc ngoài
    children: [
      {
        index: true, 
        element: <HomePage />, // <--- HomePage sẽ chui vào vị trí <Outlet /> của Layout
      },
      {
        path: "/dich-vu", // Đổi đường dẫn thành /dich-vu
        element: <ServicesPage />, // Sử dụng component mới
      },
      {
        path: "/solutions", // Khi người dùng vào link /solutions thì hiện trang này
        element: <SolutionPage />, 
      },
      // Sau này bạn thêm trang mới rất dễ:
      // {
      //   path: "products",
      //   element: <ProductPage />, // Trang này cũng tự động có Header/Footer
      // }
    ],
  },
]);

export default router;