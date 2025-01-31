import React from "react";
import styles from "./Category.module.scss";
import Sort from "../sort/Sort";
import { category } from "../../data/data";
const Category = () => {
  return (
    <div className={styles.category}>
      {category.map((categ, index) => {
        return (
          <div key={index} className={styles.item}>
            {categ}
          </div>
        );
      })}
      <div className={styles.item}>
        <Sort />
      </div>
    </div>
  );
};

export default Category;
