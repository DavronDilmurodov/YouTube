import { LoginOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Typography } from "antd";
import { hoc } from "../../utils/hoc";
import { useLoginProps } from "./login.props";

const { Title, Text } = Typography;

export const Login = hoc(
  useLoginProps,
  ({ onLogin, passwordRef, emailRef }) => {
    return (
      <Row
        style={{ height: "100%", flexDirection: "column" }}
        align={"middle"}
        justify={"center"}
      >
        <Title level={2}>Login</Title>
        <Text>
          You need to login with this email : <br />
          <Text strong copyable type="danger">
            eve.holt@reqres.in
          </Text>
        </Text>
        <Form onFinish={onLogin} layout="vertical">
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email !",
              },
            ]}
          >
            <Input
              style={{ width: "300px" }}
              placeholder="Email"
              type="email"
              ref={emailRef}
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password !",
              },
            ]}
          >
            <Input
              style={{ width: "300px" }}
              placeholder="Password"
              type="password"
              ref={passwordRef}
            />
          </Form.Item>
          <Button
            htmlType="submit"
            style={{
              display: "flex",
              alignItems: "center",
              float: "right",
            }}
          >
            <LoginOutlined style={{ marginRight: "20px", fontSize: "22px" }} />
            Login
          </Button>
        </Form>
      </Row>
    );
  }
);
