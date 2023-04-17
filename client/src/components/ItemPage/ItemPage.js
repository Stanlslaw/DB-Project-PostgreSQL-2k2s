import React from "react";
import "./ItemPage.scss";

import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSize } from "../../Slices/WindowSizeSlice.js";

import Header from "../GeneralComponents/Header/Header.js";
import Footer from "../GeneralComponents/Footer/Footer.js";
import MainSection from "./MainSection/MainSection.js";

export const Context = createContext();

export default function ItemPage(props) {
  const [blur, setBlur] = useState(false);
  const dispatcher = useDispatch();
  dispatcher(changeSize(window.innerWidth));
  window.addEventListener("resize", () => {
    dispatcher(changeSize(window.innerWidth));
  });
  return (
    <div
      className="mainPage"
      style={blur ? { "--status": "block" } : { "--status": "none" }}
    >
      <Header onMenuChanged={setBlur}></Header>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}
