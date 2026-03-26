import { Form, Input, Button, Card, Typography, Row, Col } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Contact:", values);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-[#E60000] text-white py-16 text-center">
        <Title level={1} style={{ color: "white" }}>
          Liên hệ với chúng tôi
        </Title>
        <Paragraph style={{ color: "#fff" }}>
          Viettel luôn sẵn sàng hỗ trợ bạn 24/7
        </Paragraph>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <Row gutter={[24, 24]}>

          {/* FORM */}
          <Col xs={24} md={12}>
            <Card className="shadow-md rounded-2xl">
              <Title level={3}>Gửi yêu cầu</Title>

              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Họ tên"
                  name="name"
                  rules={[{ required: true, message: "Vui lòng nhập tên" }]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  label="Nội dung"
                  name="message"
                  rules={[{ required: true }]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="bg-[#E60000] border-none font-semibold"
                >
                  Gửi liên hệ
                </Button>
              </Form>
            </Card>
          </Col>

          {/* INFO + MAP */}
          <Col xs={24} md={12}>
            <Card className="shadow-md rounded-2xl mb-4">
              <Title level={4}>Thông tin liên hệ</Title>

              <p><PhoneOutlined /> 1800 8000</p>
              <p><MailOutlined /> support@viettel.vn</p>
              <p><EnvironmentOutlined /> Hà Nội, Việt Nam</p>
            </Card>

            {/* GOOGLE MAP */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Viettel Map"
                src="https://www.google.com/maps?q=Viettel+Hà+Nội&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default ContactPage;