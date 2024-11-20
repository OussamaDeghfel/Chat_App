import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import messagebackground from "../../assets/messagebackground.webp";
const Auth = () => {
  return (
    <div className="w-full h-full bg-contain flex justify-center items-center " style={{ backgroundImage: `url(${messagebackground})` }}>
        <div className="w-full h-full justify-center items-center flex bg-black/70" >
      <div className="w-1/3 h-fit border-2 bg-slate-400 border-slate-900 p-4 rounded-md space-y-4 shadow-neutral-800 shadow-lg">
      <h1 className="text-center font-bold text-3xl text-white">Sign In</h1>
        <Form name="login" layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    </div>
  );
};

export default Auth;
