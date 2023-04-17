import "./MainSection.scss";

import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Main(props) {
  return (
    <main className="mainSectionAbout">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>О нас</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <div class="content">
            <p>
              <em>
                <strong>
                  Интернет-магазин "Любовь Николаевна" – лучшие товары по низким
                  ценам!
                </strong>
              </em>
            </p>
            <p>
              <em>
                Мы рады предложить вам недорогие, но качественные товары с
                подробными описаниями, характеристиками и фотографиями. У нас Вы
                можете купить замечательные товары: технику, электронику,
                одежду, обувь, игрушки, книги и многое другое в вашем регионе по
                ценам производителей и без наценки.
              </em>
            </p>
            <p>
              <em>
                Продажа большого ассортимента разнообразных товаров – основная
                специализация нашего интернет-магазина. Мы доставим ваш заказ
                бесплатно в любой уголок мира, осуществим подробную консультацию
                по товарам и поможем с выбором.
              </em>
            </p>
            <p>
              <em>
                Магазин "Любовь Николаевна" предлагает Вам купить качественные
                автомобильные детали и многое другое с доставкой! Все виды
                современных товаров от эконом класса до более дорогих
                представлены в нашем каталоге.
              </em>
            </p>
            <p>
              <em>
                Вы можете купить любые товары в вашем городе: технику,
                электронику, одежду, обувь, игрушки, книги и многое другое.
              </em>
            </p>
            <p>
              <em>
                <strong>Наши главные преимущества:</strong>
              </em>
            </p>
            <ul>
              <li>
                <em>Низкие цены от производителей</em>
              </li>
              <li>
                <em>Доставка по городу в день заказа</em>
              </li>
              <li>
                <em>Доставка заказов Почтой по всей Стране за 5-15 дней</em>
              </li>
              <li>
                <em>Только оригинальная и сертифицированная продукция</em>
              </li>
              <li>
                <em>Гарантия на все товары – 5 лет!</em>
              </li>
              <li>
                <em>
                  Не понравился товар? Вернем или обменяем в течение 14-ти дней
                  без оформления лишних бумаг!
                </em>
              </li>
              <li>
                <em>Бонусы и скидки для постоянных покупателей</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
