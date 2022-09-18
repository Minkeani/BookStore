import React, { useState } from "react";
import RouteList from "../../routes/RouteList";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.scss";
import BookBlock from "../CartBlock/BookBlock";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header>
        <ul
          className={cn(
            styles.topnav,
            active === true ? styles.responsive : ""
          )}
        >
          <li>
            <Link to="/">Магазин книг</Link>
          </li>
          <li>
            <Link to="/">Соглашение</Link>
          </li>
          <li>
            <Link to="/bookBasket">
              <BookBlock />
            </Link>
          </li>
          <li className={styles.icon}>
            <a href="#" onClick={() => setActive(!active)}>
              ☰
            </a>
          </li>
        </ul>
      </header>
      <RouteList />
    </>
  );
};

export default Header;
