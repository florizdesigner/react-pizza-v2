import React from "react";

import search from "../../assets/search.svg";
import clear from "../../assets/clear.svg";
import styles from "./index.module.scss";

const Search = ({ value, onChangeValue }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Введите запрос.."
        value={value}
        onChange={(e) => onChangeValue(e.currentTarget.value)}
      />
      {value ? (
        <img
          src={clear}
          alt="search"
          width="10px"
          onClick={() => onChangeValue("")}
          className={styles.search__button_clear}
        />
      ) : (
        <img src={search} alt="search" width="10px" />
      )}
    </div>
  );
};

export default Search;
