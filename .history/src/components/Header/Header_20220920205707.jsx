import React, { useState } from "react";
import RouteList from "../../routes/RouteList";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.scss";
import BookBlock from "../CartBlock/BookBlock";
import { BiBook } from "react-icons/bi";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState('Магазин')

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
            <Link to="/" onClick={() => setActiveLink('Магазин')} className={cn(styles.active, styles.logo)}>
              <BiBook size={50} />
            </Link>
          </li>

          <li>
            <Link onClick={ () => setActiveLink('Магазин')} className={activeLink === 'Магазин' ? styles.activeLink : ''} to="/">Магазин книг</Link>
          </li>
          <li>
            <Link onClick={() => setActiveLink('Соглашение')} className={activeLink === 'Соглашение' ? styles.activeLink : ''}  to="/agreement">Соглашение</Link>
          </li>
          <li>
            <Link onClick={() => setActiveLink('Поддержка')} className={activeLink === 'Поддержка' ? styles.activeLink : ''} to="/support">Поддержка</Link>
          </li>
          <li>
            <Link to="/bookBasket">
              <BookBlock onClick={() => setActiveLink('Корзина')} />
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
