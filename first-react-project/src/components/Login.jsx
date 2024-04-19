import { Button, Form, Input } from "antd";
import { LoginService } from "../services/Login";

const LOGIN_URL = "http://127.0.0.1:8000";

export const Login = () => {
  const handleForm = async ({ username, password }) => {
    if (username.trim() !== "" && password.trim() !== "") {
      await handleLogin(username, password);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const data = await LoginService(username, password, LOGIN_URL);
      if (data.id !== undefined || data.id !== null) {
        window.localStorage.setItem("user", JSON.stringify(data));
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contenedor-login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleForm}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
