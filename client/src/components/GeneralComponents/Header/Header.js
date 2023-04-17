import "./Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeMenuStatus } from "../../MainPage/Slices/MainPageSlice.js";

import userImg from "./files/user.svg";
import shopingCartImg from "./files/shopping-cart.svg";
import favoritesImg from "./files/heart.svg";
import menuImg from "./files/menu-burger.svg";
import searchImg from "./files/search.svg";
import crossImg from "./files/cross-small.svg";
import logoImg from "./files/logo-new.svg";

import SearchMob from "./components/Search/SearchMob.js";
import Search from "./components/Search/SearchPC.js";

export default function Header(props) {
  const dispatcher = useDispatch();
  const [isSearchShowed, setisSearchShowed] = useState(false);
  const [isMenuShowed, setisMenuShowed] = [
    useSelector((state) => state.mainPage.isMenuShowed),
    (status) => dispatcher(changeMenuStatus(status)),
  ];
  useEffect(() => {
    return () => {
      setisMenuShowed(false);
    };
  }, []);
  useEffect(() => {
    props.onMenuChanged(isMenuShowed);
  }, [isMenuShowed]);
  if (useSelector((state) => state.windowSize.width) > 766) {
    return (
      <header className="header">
        <div className="headerZone">
          <div className="headerContainer">
            <div className="headerMenu">
              <div className="headerMenuButtonContainer">
                <button
                  className="headerMenuButton"
                  onClick={() => {
                    isMenuShowed
                      ? setisMenuShowed(false)
                      : setisMenuShowed(true);
                    setisSearchShowed(false);
                  }}
                >
                  <img src={menuImg} alt="Меню" className="headerButtonImg" />
                </button>
              </div>
            </div>
            <div className="headerLogoSearch">
              {isSearchShowed ? (
                <Search></Search>
              ) : (
                <div className="LogoContainer">
                  <Link to="/">
                    <img src={logoImg} alt="логотип" />
                  </Link>
                </div>
              )}
            </div>
            <div className="headerHandleButtons">
              <div className="headerHandleButtonsContainer">
                {isSearchShowed ? (
                  <button
                    className="headerSearchIcon"
                    style={
                      isSearchShowed
                        ? { backgroundColor: "rgba(200, 200, 200, 0.5)" }
                        : { backgroundColor: "white" }
                    }
                    onClick={() => {
                      setisSearchShowed(false);
                    }}
                  >
                    <img
                      src={crossImg}
                      alt="закрыть"
                      className="headerButtonImg"
                    />
                  </button>
                ) : (
                  <button
                    className="headerSearchIcon"
                    style={
                      isMenuShowed
                        ? { backgroundColor: "inherit" }
                        : { backgroundColor: "white" }
                    }
                    onClick={() => {
                      setisSearchShowed(true);
                    }}
                  >
                    <img
                      src={searchImg}
                      alt="поиск"
                      className="headerButtonImg"
                    />
                  </button>
                )}

                <Link to="/profile">
                  <img
                    src={userImg}
                    alt="аккаунт"
                    className="headerButtonImg"
                  />
                </Link>
                <Link to="/favorites">
                  <img
                    src={favoritesImg}
                    alt="избранное"
                    className="headerButtonImg"
                  />
                </Link>
                <Link to="/basket">
                  <img
                    src={shopingCartImg}
                    alt="корзина"
                    className="headerButtonImg"
                  />
                </Link>
              </div>
            </div>
            <div className="headerContent">
              <div className="headerContentContainer">
                <div className="headerContentElement">
                  <Link to="/catalog">Шины</Link>
                </div>
                <div className="headerContentElement">
                  <Link to="/catalog">Диски</Link>
                </div>
                <div className="headerContentElement">
                  <Link to="/catalog">Разное</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="headerSideMenu"
            style={
              isMenuShowed
                ? {
                    display: "block",
                  }
                : {
                    display: "none",
                  }
            }
          >
            <button
              className="headerSideMenuShutButton"
              onClick={() => {
                isMenuShowed ? setisMenuShowed(false) : setisMenuShowed(true);
              }}
            >
              <img src={crossImg} alt="закрыть" className="headerButtonImg" />
            </button>
            <div className="headerSideMenuContainer">
              <div className="headerSideMenuTop">Меню</div>
              <div className="Separator"></div>
              <div className="headerSideMenuSection">
                <ul>
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
              <div className="Separator"></div>
              <div className="headerSideMenuContacts">
                <div className="headerSideMenuContactsHead">Контакты</div>
                <div className="headerSideMenuContactsContent">
                  <div>г. Кобрин ул. Ленина д. 111</div>
                  <div>+375 (29) 5200341</div>
                </div>
              </div>
              <div className="Separator"></div>
              <div className="headerSideMenuSocial">
                <a href="#">
                  <img alt="" src="" />
                </a>
                <a href="#">
                  <img alt="" src="" />
                </a>
                <a href="#">
                  <img alt="" src="" />
                </a>
                <a href="#">
                  <img alt="" src="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="headermob">
        <div className="headerZone">
          <div className="headerContainer">
            <div className="headerMenu">
              <div className="headerMenuButtonContainer">
                <button
                  className="headerMenuButton"
                  onClick={() => {
                    isMenuShowed
                      ? setisMenuShowed(false)
                      : setisMenuShowed(true);
                    setisSearchShowed(false);
                  }}
                >
                  <img src={menuImg} alt="Меню" className="headerButtonImg" />
                </button>
              </div>
            </div>
            <div className="headerLogo">
              <div className="LogoContainer">
                <img src={logoImg} alt="логотип" />
              </div>
            </div>
            <div className="headerHandleButtons">
              <div className="headerHandleButtonsContainer">
                <Link to="/basket">
                  <img
                    src={shopingCartImg}
                    alt="корзина"
                    className="headerButtonImg"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="headerSideMenu"
            style={
              isMenuShowed
                ? {
                    display: "block",
                  }
                : {
                    display: "none",
                  }
            }
          >
            <div className="headerSideMenuContainer">
              <div className="headerSideMenuTopContainer">
                <div className="headerSideMenuTopHandleButtonsContainer">
                  {isSearchShowed ? (
                    <>
                      <button className="headerSideMenuTopHandleButtonsCloseSearch">
                        <img
                          alt="закрыть поиск"
                          src={crossImg}
                          onClick={() => {
                            setisSearchShowed(false);
                          }}
                        />
                      </button>
                      <SearchMob></SearchMob>
                    </>
                  ) : (
                    <>
                      <button
                        className="headerSearchIcon"
                        style={
                          isMenuShowed
                            ? { backgroundColor: "inherit" }
                            : { backgroundColor: "white" }
                        }
                        onClick={() => {
                          setisSearchShowed(true);
                        }}
                      >
                        <img
                          src={searchImg}
                          alt="поиск"
                          className="headerButtonImg"
                        />
                      </button>
                      <Link to="/profile">
                        <img
                          src={userImg}
                          alt="аккаунт"
                          className="headerButtonImg"
                        />
                      </Link>
                      <Link to="/favorites">
                        <img
                          src={favoritesImg}
                          alt="избранное"
                          className="headerButtonImg"
                        />
                      </Link>
                      <Link to="/basket">
                        <img
                          src={shopingCartImg}
                          alt="корзина"
                          className="headerButtonImg"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <button
                  className="headerSideMenuShutButton"
                  style={
                    isSearchShowed ? { display: "none" } : { display: "block" }
                  }
                  onClick={() => {
                    isMenuShowed
                      ? setisMenuShowed(false)
                      : setisMenuShowed(true);
                  }}
                >
                  <img
                    src={crossImg}
                    alt="закрыть"
                    className="headerButtonImg"
                  />
                </button>
              </div>
              <div className="Separator"></div>
              <div className="headerSideMenuCatalog">
                <div className="headerSideMenuCatalogHead">Каталог</div>
                <div className="headerSideMenuCatalogContent">
                  <ul>
                    <li>
                      <Link to="/catalog">Шины</Link>
                    </li>
                    <li>
                      <Link to="/catalog">Диски</Link>
                    </li>
                    <li>
                      <Link to="/catalog">Разное</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Separator"></div>
              <div className="headerSideMenuSection">
                <ul>
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
              <div className="Separator"></div>
              <div className="headerSideMenuContacts">
                <div className="headerSideMenuContactsHead">Контакты</div>
                <div className="headerSideMenuContactsContent">
                  <div>
                    <a href="tel:+375295200341">+375 (29) 5200341</a>
                  </div>
                  <div>г. Кобрин ул. Ленина д. 111</div>
                </div>
              </div>
              <div className="Separator"></div>
              <div className="headerSideMenuSocial">
                <a href="#">
                  <img alt="" src="" />
                </a>
                <a href="#">
                  <img alt="" src="" />
                </a>
                <a href="#">
                  <img alt="" src="" />
                </a>
                <a href="#">
                  <img alt="" src="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
