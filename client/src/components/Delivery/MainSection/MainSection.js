import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Main(props) {
  return (
    <main className="mainSectionCatalogDelivery">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Доставка и оплата</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <div class="layout__content">
            <div class="static-text">
              <p>
                Наш интернет-магазин осуществляет доставку по Брестской области
                и другим областям Беларуси.
              </p>
              <ol>
                <li>Курьерская доставка по Беларуси — 100 byn.&nbsp;</li>
                <li>
                  Самовывоз из нашего пункта выдачи или розничного магазина –
                  бесплатно!
                </li>
                <li>
                  Почтовая доставка по Беларуси — от 150 byn в зависимости от
                  адреса доставки.
                </li>
              </ol>
              <p>Сроки доставки:</p>
              <ol>
                <li>
                  Курьерская доставка по Брестской области – на следующий день
                </li>
                <li>Самовывоз – на следующий день</li>
                <li>
                  Почтовая доставка по Беларуси– от 3 до 14 дней в зависимости
                  от области
                </li>
              </ol>
              <p>
                <strong>
                  Доставка осуществляется бесплатно при сумме заказа более 1000
                  byn.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
