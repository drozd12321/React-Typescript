import React from "react";
import styles from "./Category.module.scss";
import Sort from "../sort/Sort";
const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.item}>Все</div>
      <div className={styles.item}>Мясные</div>
      <div className={styles.item}>Вегатарианские</div>
      <div className={styles.item}>Гриль</div>
      <div className={styles.item}>Острые</div>
      <div className={styles.item}>Закрытые</div>
      <div className={styles.item}>
        <Sort />
      </div>
    </div>
  );
};

export default Category;
