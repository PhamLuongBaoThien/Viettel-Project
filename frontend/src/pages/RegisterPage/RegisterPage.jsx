import { Form, Input, Button, Card, Typography, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Register:", values);
    message.success("Đăng ký thành công!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <Card
        className="w-full max-w-md shadow-xl rounded-2xl"
        bordered={false}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
         
          <Title level={3} className="!text-[#E60000] !mb-0">
            Đăng ký tài khoản
          </Title>
          <Text type="secondary">
            Tham gia hệ thống Viettel
          </Text>
        </div>

        {/* Form */}
        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="Tên người dùng"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nhập tên người dùng"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Nhập email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập lại mật khẩu"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="bg-[#E60000] hover:bg-[#cc0000] border-none font-semibold"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>

        {/* Footer */}
        <div className="text-center mt-4">
          <Text>
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-[#E60000] font-semibold">
              Đăng nhập
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;