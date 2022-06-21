import React from "react";

import styles from "./index.module.scss";

const Category = ({ name }) => {
  return (
    <div className={styles.category}>
      <h1>{name}</h1>
    </div>
  );
};

export default Category;
