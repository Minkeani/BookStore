import React from "react";
import vk from '../../img/vk.svg';
import tg from '../../img/tg.svg';
import github from '../../img/github.svg';
import nav from '../../img/nav-icon1.svg'

const Footer = () => {
  return (
    <footer>
      <h2>Book store</h2>
      <p>
        Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию
        услуг в сфере торговли. Все закупаемые ключи приобретаются у официальных
        поставщиков. Все названия продуктов, компаний и марок, логотипы и
        товарные знаки являются собственностью соответствующих владельцев.
      </p>
      <div className="social-icon">
                <a href="#"><img src={vk} alt="" /></a>
                <a href="#"><img src={tg} alt="" /></a>
                <a href="#"><img src={github} alt="" /></a>
        </div>
    </footer>
  );
};

export default Footer;
