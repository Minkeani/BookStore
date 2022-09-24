import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";

const Filter = ({
  value,
  filterInput,
  priceFunc,
  titleFunc,
  autorFunc,
  filter,
}) => {
  const [active, setActive] = useState("По умолчанию");

  const handleClick = (val) => {
    switch (val) {
      case "Цена ↓":
        priceFunc(filter);
        setActive("Цена ↓");
        break;
      case "Название":
        titleFunc(filter);
        setActive("Название");
        break;
      case "Автор":
        autorFunc(filter);
        setActive("Автор");
        break;
      default:
        alert("Нет таких значений");
    }
  };

  useEffect(() => {}, [priceFunc, value]);

  return (
    <nav className={styles.Navigate} id="project">
      <ul>
        <li
          className={active === "Цена ↓" ? "active" : ""}
          onClick={() => handleClick("Цена ↓")}
        >
          Цена ↓
        </li>
        <li
          className={active === "Название" ? "active" : ""}
          onClick={() => handleClick("Название")}
        >
          Название
        </li>
        <li
          className={active === "Автор" ? "active" : ""}
          onClick={() => handleClick("Автор")}
        >
          Автор
        </li>
      </ul>
      <input
        value={value}
        onChange={(e) => filterInput(e.target.value)}
        placeholder="Введите название книги"
        type="text"
      />
    </nav>
  );
};

export default Filter;
