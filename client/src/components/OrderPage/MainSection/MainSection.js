import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb, Result, Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Main(props) {
  return (
    <main className="mainSectionPayments">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Статус заказа</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <Result
            status="success"
            title="Ваш заказ успешно оформлен!"
            subTitle="Номер вашего заказа: 2017182818828182881. Мы свяжемся с вами в ближайшее время."
            extra={[
              <Button key="buy">
                <Link to="/catalog">Вернуть к покупкам</Link>
              </Button>,
            ]}
          />
        </div>
      </div>
    </main>
  );
}
