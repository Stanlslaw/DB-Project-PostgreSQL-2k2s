import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import AboutUs from "./components/AboutUs/About.js";
import Main from "./components/MainPage/MainPage.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import Basket from "./components/Basket/Basket.js";
import Favorites from "./components/Favorites/Favorites.js";
import Catalog from "./components/Catalog/Catalog.js";
import Contacts from "./components/Contacts/Contacts.js";
import Delivery from "./components/Delivery/Delivery.js";
import EntryPage from "./components/EntryPage/EntryPage.js";
import Profile from "./components/Profile/Profile.js";
import Payment from "./components/Payment/Payment.js";
import ItemPage from "./components/ItemPage/ItemPage.js";
import OrderPage from "./components/OrderPage/OrderPage.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/item" element={<ItemPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/entry" element={<EntryPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/basket/order" element={<OrderPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
