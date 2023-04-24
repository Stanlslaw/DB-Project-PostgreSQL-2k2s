import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import img from "./files/test-card-image.jpg";
import heartImg from "./files/heart.svg";
import deleteImg from "./files/trash.svg";

import { InputNumber } from "antd";

export default function Item() {
  return (
    <div className="item">
      <div className="itemImageContainer">
        <Link to="/catalog/item?009">
          <img className="itemImage" src={img} alt="товар" />
        </Link>
      </div>

      <Link className="itemTitle" to="/catalog/item?009">
        Шина Belshina
      </Link>
      <div className="itemTotal">1000$</div>
      <div className="delete">
        <button className="Button">
          <span className="controlImg">
            <img src={heartImg} alt="избр" />
          </span>
          <span className="controlText">В избранное</span>
        </button>
        <button className="Button">
          <span className="controlImg">
            <img src={deleteImg} alt="Уд" />
          </span>
          <span className="controlText">Удалить</span>
        </button>
      </div>
      <div className="itemCounter">
        <InputNumber min={1} max={99} defaultValue={1} />
      </div>
    </div>
  );
}
