import React from "react";
import "./MainSection.scss";

import { useState } from "react";
import Card from "../components/Card/Card.js";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
export default function MainSection() {
  const [isGoods, setIsGoods] = useState(true);
  let cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card></Card>);
  }
  return (
    <main className="mainSection">
      <div className="mainZone">
        <div className="mainSectionContainer">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Главная</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Избранное</Breadcrumb.Item>
          </Breadcrumb>
          <div className="mainSectionContainerContent">
            {isGoods ? (
              [cards]
            ) : (
              <div className="emptyContent">В избранном нет товаров:)</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
