import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
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
          <Breadcrumb.Item>Оплата</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <div class="layout__content">
            <div class="static-text">
              <p>Вы можете оплатить заказ:</p>
              <ol>
                <li>
                  Наличными курьеру или в пункте выдачи при получении заказа
                </li>
                <li>
                  Банковской картой Visa, Mastercard или МИР через сайт при
                  оформлении заказа
                </li>
                <li>Наложенным платежом при заказе с доставкой Белпочтой</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
