import React from "react";
import "./Basket.scss";

import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSize } from "../../Slices/WindowSizeSlice.js";

import MainSection from "./MainSection/MainSection.js";
import Header from "../GeneralComponents/Header/Header.js";
import Footer from "../GeneralComponents/Footer/Footer.js";

export const Context = createContext();

export default function Basket() {
  const dispatcher = useDispatch();
  dispatcher(changeSize(window.innerWidth));
  window.addEventListener("resize", () => {
    dispatcher(changeSize(window.innerWidth));
  });
  const [blur, setBlur] = useState(false);
  return (
    <div
      className="basket"
      style={blur ? { "--status": "block" } : { "--status": "none" }}
    >
      <Header onMenuChanged={setBlur}></Header>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}
