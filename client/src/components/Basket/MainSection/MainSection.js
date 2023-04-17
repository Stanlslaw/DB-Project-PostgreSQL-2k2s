import React from "react";
import "./MainSection.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import Item from "../Item/Item.js";
import { Breadcrumb } from "antd";
export default function MainSection() {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<Item></Item>);
  }
  const [isGoods, setIsGoods] = useState(true);
  return (
    <div className="mainSection">
      <div className="mainZone">
        <div className="mainSectionContainer">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Главная</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Корзина</Breadcrumb.Item>
          </Breadcrumb>
          <div className="mainSectionContainerContent">
            {isGoods ? (
              <form className="basketContent">
                <div className="items">{[items]}</div>
                <div className="controls">
                  <div className="controlsContainer">
                    <div className="counter">
                      <div className="counterHeader">В корзине</div>
                      <div className="counterInfo">
                        Товаров: <span className="counterInfoCount">4</span>
                      </div>
                    </div>
                    <div className="total">
                      <div className="totalHeader">Итого</div>
                      <div className="totalInfo">3000$</div>
                    </div>
                    <div className="SubmitButton">
                      <Link to="/order" className="SubmitButtonLink">
                        <div>Оформить заказ</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="emptyContent">Ваща корзина пуста</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
