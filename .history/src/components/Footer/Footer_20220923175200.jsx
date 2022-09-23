import React from "react";
import vk from '../../img/vk.svg';
import tg from '../../img/vk.svg';
import github from '../../img/github.svg'

const Footer = () => {
  return (
    <div>
      <h2>Book store</h2>
      <p>
        Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию
        услуг в сфере торговли. Все закупаемые ключи приобретаются у официальных
        поставщиков. Все названия продуктов, компаний и марок, логотипы и
        товарные знаки являются собственностью соответствующих владельцев.
      </p>
      <div className="social-icon">
                <a href="https://www.npmjs.com/package/animate.css/v/3.7.0" ><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={vk} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="#"><img src={tg} alt="" /></a>
                <a href="#"><img src={github} alt="" /></a>
        </div>
    </div>
  );
};

export default Footer;
