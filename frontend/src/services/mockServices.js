export const mockServices = [
  {
    id: 1,
    title: "Web bán hàng đa kênh",
    description: "Giải pháp xây dựng website bán hàng chuyên nghiệp, tích hợp quản lý kho và đơn hàng tập trung.",
    icon: "ShoppingOutlined",
  },
  {
    id: 2,
    title: "Giải pháp quản lý doanh nghiệp",
    description: "Hệ thống quản trị tổng thể (ERP), quản lý nhân sự, tài chính và quy trình vận hành tối ưu.",
    icon: "DashboardOutlined",
  },
  {
    id: 3,
    title: "Thanh toán & ký số điện tử",
    description: "Tích hợp cổng thanh toán vNPAY, Viettel Money và giải pháp ký số từ xa (Remote Signing).",
    icon: "KeyOutlined",
  },
  {
    id: 4,
    title: "Cloud & hạ tầng số",
    description: "Hạ tầng điện toán đám mây tiêu chuẩn quốc tế, đảm bảo an toàn và bảo mật dữ liệu tuyệt đối.",
    icon: "CloudServerOutlined",
  },
]

// Dữ liệu Gói cước Di động
export const mobilePlans = [
  { id: 1, name: "V90B", price: "90.000đ", period: "/tháng", data: "1GB/ngày", call: "Miễn phí gọi nội mạng < 10 phút", hot: false },
  { id: 2, name: "V120B", price: "120.000đ", period: "/tháng", data: "1.5GB/ngày", call: "Miễn phí gọi nội mạng + 50p ngoại mạng", hot: true },
  { id: 3, name: "SD135", price: "135.000đ", period: "/tháng", data: "5GB/ngày", call: "Miễn phí xem TV360 Basic", hot: true },
  { id: 4, name: "V200B", price: "200.000đ", period: "/tháng", data: "8GB/ngày", call: "Data tốc độ cao, miễn phí gọi thoại", hot: false },
];

// Dữ liệu Internet & Truyền hình
export const internetPlans = [
  { id: 1, name: "SUN1", bandwidth: "150 Mbps", price: "180.000đ", period: "/tháng", desc: "Phù hợp cá nhân, hộ gia đình nhỏ", tag: "Tiết kiệm" },
  { id: 2, name: "STAR1", bandwidth: "200 Mbps", price: "210.000đ", period: "/tháng", desc: "Trang bị thêm 1 Home Wifi Mesh", tag: "Khuyên dùng" },
  { id: 3, name: "SUN3", bandwidth: "1 Gbps", price: "279.000đ", period: "/tháng", desc: "Tốc độ siêu nhanh, không giới hạn", tag: "VIP" },
];

// Dữ liệu Thiết bị (Điện thoại)
export const deviceProducts = [
  { id: 1, name: "iPhone 15 Pro Max 256GB", price: "29.990.000đ", oldPrice: "34.990.000đ", discount: "-15%", img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/1752946571.jpeg" },
  { id: 2, name: "Samsung Galaxy Z Fold5", price: "30.990.000đ", oldPrice: "40.990.000đ", discount: "-25%", img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/1523456789.jpeg" },
  { id: 3, name: "Xiaomi Redmi Note 13", price: "4.590.000đ", oldPrice: "5.290.000đ", discount: "-10%", img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/1987654321.jpeg" },
  { id: 4, name: "OPPO Reno10 5G", price: "9.990.000đ", oldPrice: "10.990.000đ", discount: "-5%", img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/oppo-reno10.jpg" },
];
