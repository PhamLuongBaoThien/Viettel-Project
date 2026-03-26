import { useState } from "react";
import "./login.css";

export default function LoginPage() {

  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login-container">

      <div className="login-box">

        <div className="logo" >
        </div>

        <h2><strong>Đăng nhập hệ thống</strong></h2>

        <form>

          <div className="input-group">
            <input type="text" required />
            <label>Tài khoản</label>
          </div>

          <div className="input-group">
            <input type={showPass ? "text" : "password"} required />
            <label>Mật khẩu</label>

            <span
              className="show-pass"
              onClick={() => setShowPass(!showPass)}
            >
              👁
            </span>
          </div>

          <button>Đăng nhập</button>
          <div className="extra">
            <a href="/forgot-password">Quên mật khẩu?</a>
          </div>

          
        </form>
        <div className="text-center mt-4">
  <p>
    Chưa có tài khoản?{" "}
    <a href="/register" className="text-[#E60000] font-semibold">
      Đăng ký ngay
    </a>
  </p>
</div>
      </div>

    </div>
  );
}