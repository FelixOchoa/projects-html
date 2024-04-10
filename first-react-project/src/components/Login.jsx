import { Button, Form, Input } from "antd";
import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (informationForm) => {
    if (informationForm.username !== "" && informationForm.password !== "") {
      setUsername(informationForm.username);
      setPassword(informationForm.password);
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      //   const response = await fetch("http://127.0.0.1:8000/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       username: username,
      //       password: password,
      //     }),
      //   });

      //   const data = await response.json();

      //   if( data.id !== undefined || data.id !== null ){
      //     window.localStorage.setItem("user", JSON.stringify(data));
      //     window.location.reload();
      //   }
      console.log(import.meta.env.VITE_PASSWORD, import.meta.env.USERNAME)
      if (username === import.meta.env.VITE_USERNAME && password === import.meta.env.VITE_PASSWORD) {
        window.localStorage.setItem("user", JSON.stringify({
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD
        }));
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
