import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb, Button, Form, Input, Checkbox } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default function Main(props) {
  const [isUserHasAccount, setisUserHasAccount] = useState(false);
  return (
    <main className="mainSectionEntry">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {isUserHasAccount ? "Вход в аккаунт" : "Регистрация"}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          {isUserHasAccount ? (
            <div className="reg">
              <Form
                name="basic"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 20,
                }}
              >
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Имя"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "lastname"]}
                  label="Фамилия"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Пароль"
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
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Зарегистрироваться
                  </Button>
                </Form.Item>
              </Form>
            </div>
          ) : (
            <div className="log">
              <Form
                name="normal_login"
                style={{ minWidth: "280px", width: "100%" }}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link style={{ float: "right" }} href="">
                    Forgot password
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Log in
                  </Button>
                  Or <Link>register now!</Link>
                </Form.Item>
              </Form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
