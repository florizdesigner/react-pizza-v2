import React from "react";

import styles from "./index.module.scss";

const Categories = ({
  value,
  onClickSort,
  orderBy,
  onClickOrderBy,
  categoryId,
  onClickCategory,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);

  const categories = ["Все", "Классические", "Авторские"];
  const list = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        {/*/////////// КАТЕГОРИИ ///////////////*/}
        <ul className={styles.categories__list}>
          {categories.map((e) => {
            return (
              <li
                onClick={() => onClickCategory(categories.indexOf(e))}
                key={e}
                className={
                  categories.indexOf(e) === categoryId
                    ? styles.categories__list__item__active
                    : styles.categories__list__item
                }
              >
                {e}
              </li>
            );
          })}
        </ul>
      </div>

      {/*/////////// СОРТИРОВКА ///////////////*/}
      <div className={styles.sort}>
        <svg
          className={orderBy ? styles.sort__desc : styles.sort__asc}
          onClick={() => onClickOrderBy(!orderBy)}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          ></path>
        </svg>
        <strong>Сортировка по:</strong>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
          {value.name}
        </span>

        {isVisiblePopup && (
          <div className={styles.sort_popup} id="popup">
            <ul>
              {list.map((obj, i) => {
                return (
                  <li
                    key={i}
                    className={
                      value.name === obj.name ? styles.sort_popup__active : ""
                    }
                    onClick={() => {
                      onClickSort(obj);
                      setIsVisiblePopup(false);
                    }}
                  >
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
