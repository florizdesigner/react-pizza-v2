import React from "react";

import styles from "./index.module.scss";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <ul>
        <li className={styles.cartItem_pizza}>
          <img
            src="https://sun9-36.userapi.com/impg/esxZZJUvCyfBA8Daog2rgng0YFGIvn0ILmbDVg/G-BP12Pva6c.jpg?size=1920x1920&quality=96&sign=5fce4ba5ba8b7fb8d5f92753d4015c50&type=album"
            alt="pizza"
          />
          <div className={styles.cartItem_pizza_name}>
            <h2>Сырный цыпленок</h2>
            <span>тонкое тесто, 26 см.</span>
          </div>
        </li>
        <li className={styles.cartItem_count}>
          <button>-</button>
          <h3>3</h3>
          <button>+</button>
        </li>
        <li className={styles.cartItem_price}>
          <h2>770 ₽</h2>
        </li>
        <li className={styles.cartItem_delete}>
          <button>✕</button>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
