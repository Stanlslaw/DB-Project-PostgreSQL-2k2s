import "./Card.scss";
import koleso from "../files/test-card-image.jpg";
import favorites from "../files/favorites.svg";
import shopCard from "../files/shopping-card.svg";

import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <form className="cardContainer">
        <div className="cardContainerContent">
          <div className="productPhotoContainer">
            <div className="favoriteIcon">
              <img
                className="favoriteIconImg"
                src={favorites}
                alt="в избранное"
              />
            </div>
            <div className="productPhoto">
              <Link to="/catalog/item?009">
                <img src={koleso} alt="изображение товара" />
              </Link>
            </div>
          </div>
          <div className="productTitle">
            <Link to="/catalog">Шина</Link>
          </div>
          <div className="productDescription">
            Размеры 215/55 R16 97V Бренд Belshina
          </div>
          <div className="productBottom">
            <div className="productBottomContainer">
              <div className="productPrice">
                <span>100 Byn</span>
              </div>
              <div className="productControls">
                <button>
                  <img src={shopCard} alt="добавить в корзину" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
