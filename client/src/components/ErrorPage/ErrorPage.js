import React from "react";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontFamily: "Monserrat", textAlign: "center" }}>
        <p style={{ fontSize: "4rem", marginTop: "0" }}>Oops</p>
        <p style={{ fontSize: "1.5rem" }}>
          К сожалению, что-то пошло не так :(
        </p>
        <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
