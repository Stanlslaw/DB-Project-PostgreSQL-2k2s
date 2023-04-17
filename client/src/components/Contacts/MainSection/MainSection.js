import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Main(props) {
  return (
    <main className="mainSectionContact">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Контакты</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <div class="layout__content">
            <div class="static-text">
              <p>Вы можете найти нас по адресу: г.Кобрин ул.Ленина д.111</p>
              <p>Телефон отдела продаж: +3751231231 (многоканальный)</p>
              <p>Телефон отдела оптовых продаж: +375123123</p>
              <p>Email: xxxxxx@xx.com</p>
              <p>
                <strong>График работы офиса и склада:</strong>
              </p>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td>Понедельник</td>
                      <td>с 9:00 до 21:00</td>
                    </tr>
                    <tr>
                      <td>Вторник</td>
                      <td>с 9:00 до 21:00</td>
                    </tr>
                    <tr>
                      <td>Среда</td>
                      <td>с 9:00 до 21:00</td>
                    </tr>
                    <tr>
                      <td>Четверг</td>
                      <td>с 9:00 до 21:00</td>
                    </tr>
                    <tr>
                      <td>Пятница</td>
                      <td>с 9:00 до 21:00</td>
                    </tr>
                    <tr>
                      <td>Суббота</td>
                      <td>с 10:00 до 20:00</td>
                    </tr>
                    <tr>
                      <td>Воскресенье</td>
                      <td>с 10:00 до 20:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Заказы через сайт принимаются круглосуточно!</p>
              <p>
                <strong>Реквизиты:</strong>
              </p>
              <p>ИП Шпарло Любовь Николаевна</p>
              <p>ОГРНИП: 123456789012345</p>
              <p>ИНН: 123456789012</p>
              <p>КПП: 123456789</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
