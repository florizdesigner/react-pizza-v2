import React from "react";

import styles from "./index.module.scss";

const Item = ({ imageURL, title, price, types, sizes }) => {
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const typeNames = ["тонкое", "традиционное"];

  return (
    <div className={styles.item}>
      <img src={imageURL} alt="pizza" width="200px" />
      <h2>{title}</h2>
      <div className={styles.item_menu}>
        <div className={styles.item_menu_dough}>
          <ul>
            {types.map((type) => {
              return (
                <li
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={activeType === type ? styles.item_menu_active : ""}
                >
                  {typeNames[type]}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.item_menu_diameter}>
          <ul>
            {sizes.map((size, i) => {
              return (
                <li
                  key={i}
                  onClick={() => setActiveSize(i)}
                  className={activeSize === i ? styles.item_menu_active : ""}
                >
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.item_add}>
        <span className={styles.item_add_price}>от {price} ₽</span>
        <div className={styles.item_add_button}>
          <span>Add</span>
          <span className={styles.item_add_button__counter}>1</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
