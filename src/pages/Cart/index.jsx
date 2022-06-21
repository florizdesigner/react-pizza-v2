import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import CartEmpty from "../../components/CartEmpty";
import CartItem from "../../components/CartItem";

import cart from "../../../src/assets/cart.svg";
import cartTrash from "../../../src/assets/cart_trash.svg";

import styles from "./index.module.scss";

const Cart = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.cart}>
        <div className={styles.cart_title}>
          <div className={styles.cart_title_name}>
            <img src={cart} alt="cart" />
            <h1>Корзина</h1>
          </div>
          <a href="#" className={styles.cart_title_clear}>
            <img src={cartTrash} alt="cart" />
            Очистить корзину
          </a>
        </div>
        <div className={styles.cart_items}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.cart_info}>
          <p className={styles.cart_info_count}>
            Всего пицц: <span>3 шт.</span>
          </p>
          <p className={styles.cart_info_price}>
            Сумма заказа: <span>900 ₽</span>
          </p>
        </div>
        <div className={styles.cart_buttons}>
          <Link to="/" className={styles.cart_buttons_back}>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="14" height="10" fill="white" />
              <path
                d="M3.64645 4.64645C3.45118 4.84171 3.45118 5.15829 3.64645 5.35355L6.82843 8.53553C7.02369 8.7308 7.34027 8.7308 7.53553 8.53553C7.7308 8.34027 7.7308 8.02369 7.53553 7.82843L4.70711 5L7.53553 2.17157C7.7308 1.97631 7.7308 1.65973 7.53553 1.46447C7.34027 1.2692 7.02369 1.2692 6.82843 1.46447L3.64645 4.64645ZM10 4.5L4 4.5L4 5.5L10 5.5L10 4.5Z"
                fill="#D7D7D7"
              />
            </svg>
            Вернуться назад
          </Link>
          <Link to="/" className={styles.cart_buttons_checkout}>
            Оплатить сейчас
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
