import React from "react";

import styles from "./index.module.scss";
import cartEmptyImage from "../../assets/cart_empty.svg";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart_text}>
        <h1>Корзина пустая 😕</h1>
        <span>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </span>
      </div>
      <img src={cartEmptyImage} alt="cart_empty" />
      <Link className={styles.cart_text_button} to="/">
        Вернуться назад
      </Link>
    </div>
  );
};

export default CartEmpty;
