import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes' 
import './index.css'

// 1. Import Redux Store và Provider
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Kiểm tra kỹ đường dẫn này

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Provider PHẢI bọc ngoài cùng (hoặc bọc RouterProvider) */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)