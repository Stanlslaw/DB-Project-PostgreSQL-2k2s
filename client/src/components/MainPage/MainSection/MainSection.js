import "./MainSection.scss";

import Card from "./components/Card.js";
import { Link } from "react-router-dom";

export default function Main(props) {
  let cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card></Card>);
  }
  return (
    <main className="main">
      <div className="mainZone">
        <div className="mainContainer">
          <div className="mainContainerTitleContainer">
            <div className="mainContainerTitle">Каталог</div>
          </div>
          <div className="mainContainerContent">{cards}</div>
          <div className="mainContainerCatalogLinkContainer">
            <div className="mainContainerCatalogLink">Смотреть все &gt;</div>
          </div>
          <div className="mainContainerSubContent">
            <div className="SubCollectionCard">
              <Link className="SubCollectionCardContainer" to="/catalog">
                <div className="SubCollectionCardImageContainer">
                  <img src="https://i.ibb.co/0nQqZ3r/1.png" alt="шины" />
                </div>
                <div className="SubCollectionCardTitleContainer">
                  <div className="SubCollectionCardTitle">Шины</div>
                </div>
              </Link>
            </div>
            <div className="SubCollectionCard">
              <Link className="SubCollectionCardContainer" to="/catalog">
                <div className="SubCollectionCardImageContainer">
                  <img src="https://i.ibb.co/0nQqZ3r/1.png" alt="диски" />
                </div>
                <div className="SubCollectionCardTitleContainer">
                  <div className="SubCollectionCardTitle">Диски</div>
                </div>
              </Link>
            </div>
            <div className="SubCollectionCard">
              <Link className="SubCollectionCardContainer" to="/catalog">
                <div className="SubCollectionCardImageContainer">
                  <img src="https://i.ibb.co/0nQqZ3r/1.png" alt="разное" />
                </div>
                <div className="SubCollectionCardTitleContainer">
                  <div className="SubCollectionCardTitle">Разное</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
