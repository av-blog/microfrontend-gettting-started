import React from "react";
import Home from "./home.component";

export default function Root(props) {
  return (
    <div>
      <header className="masthead mb-auto">
        <div className="inner">
          <a className="blog-logo" href="/">
            <img
              style={{ maxWidth: "40px" }}
              src="https://single-spa.js.org/img/logo-white-bgblue.svg"
              alt="TecMec Portal"
            />{" "}
            TecMec
          </a>
        </div>
        <nav className="nav nav-masthead justify-content-center">
          <a
            className={`nav-link ${location.pathname === "/" && "active"}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`nav-link ${location.pathname === "/user" && "active"}`}
            href="/user"
          >
            User Manager
          </a>
          <a
            className={`nav-link ${
              location.pathname === "/product" && "active"
            }`}
            href="/product"
          >
            Product Catlog
          </a>
        </nav>
      </header>
    </div>
  );
}
