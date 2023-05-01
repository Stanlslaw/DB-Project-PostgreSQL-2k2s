import "./MainSection.scss";
import axios from "../../../axios.js";

import { Link } from "react-router-dom";
import { Breadcrumb, Button, Form, Input, Checkbox, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default function Main(props) {
  const [isUserHasAccount, setisUserHasAccount] = useState(true);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [regLoading, setRegLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const regusr = async () => {
    try {
      setRegLoading(true);
      const { data } = await axios.post("/reguser", {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password,
      });
      await setTimeout(() => {
        setRegLoading(false);
        setisUserHasAccount(true);
        messageApi.open({
          type: "success",
          content: "Вы успешно зарегестрированы",
        });
      }, 3000);

      console.log(data.result);
    } catch (e) {
      setRegLoading(false);
      console.log(e);
      alert(e);
    }
  };
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
          {contextHolder}
          {!isUserHasAccount ? (
            <div className="reg">
              <Form
                name="basic"
                labelCol={{
                  flex: "150px",
                }}
                wrapperCol={{ flex: 1 }}
                colon={false}
                labelAlign="left"
                // style={{ minWidth: "260px" }}
              >
                <Form.Item
                  name={["user", "email"]}
                  label="Email:"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Имя:"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={["user", "lastname"]}
                  label="Фамилия:"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={["user", "phone"]}
                  label="Телефон:"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Пароль:"
                  name="password"
                  style={{ flexFlow: "nowrap" }}
                  wrapperCol={{ flexFlow: "nowrap" }}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите пароль!",
                    },
                  ]}
                >
                  <Input.Password
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Повторите пароль:"
                  name="passwordCheck"
                  style={{ flexFlow: "nowrap" }}
                  wrapperCol={{ flexFlow: "nowrap" }}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите пароль!",
                    },
                  ]}
                >
                  <Input.Password
                    onChange={(e) => {
                      setPasswordCheck(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    loading={regLoading}
                    onClick={() => {
                      regusr();
                    }}
                  >
                    Зарегистрироваться
                  </Button>
                  Есть аккаунт
                  <button
                    className="regbutton"
                    onClick={() => {
                      setisUserHasAccount(true);
                    }}
                  >
                    войти.
                  </button>
                </Form.Item>
              </Form>
            </div>
          ) : (
            <div className="log">
              <Form
                name="normal_login"
                style={{ minWidth: "260px", width: "100%" }}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="Пароль"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите пароль!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Пароль"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                  </Form.Item>

                  <Link style={{ float: "right" }} href="">
                    Забыли пароль?
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Войти
                  </Button>
                  Или
                  <button
                    className="logbutton"
                    onClick={() => {
                      setisUserHasAccount(false);
                    }}
                  >
                    пройти регистрацию.
                  </button>
                </Form.Item>
              </Form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
