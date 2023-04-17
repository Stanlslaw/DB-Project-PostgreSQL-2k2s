import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb, Form } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Card } from "antd";
import {
  UserOutlined,
  UnorderedListOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

export default function Main(props) {
  return (
    <main className="mainSectionProfile">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Профиль</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <div className="profile">
            <Card
              title={
                <>
                  <UserOutlined />
                  <span> Профиль</span>
                </>
              }
            >
              <div>
                <Form>
                  <Form.Item></Form.Item>
                </Form>
              </div>
            </Card>
          </div>
          <div className="adresses">
            <Card
              title={
                <>
                  <SolutionOutlined />
                  <span>adresses</span>
                </>
              }
            ></Card>
          </div>
          <div className="orders">
            <Card
              title={
                <>
                  <UnorderedListOutlined />
                  <span>orders</span>
                </>
              }
            ></Card>
          </div>
        </div>
      </div>
    </main>
  );
}
