import "./Footer.scss";

import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <ul className="footerContentContainer">
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/about">О компании</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/payment">Оплата</Link>
          </li>
          <li>
            <Link to="/profile">Личный кабинет</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
