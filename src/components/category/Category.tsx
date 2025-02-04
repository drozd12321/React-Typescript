import React, { useState } from "react";
import styles from "./Category.module.scss";
import Sort from "../sort/Sort";
import { category } from "../../data/data";
const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  function hadleSelectedCategory(categor: string) {
    setSelectedCategory(categor);
  }
  return (
    <div className={styles.cont}>
      <div className={styles.category}>
        {category.map((categ, index) => {
          return (
            <div
              key={index}
              onClick={() => hadleSelectedCategory(categ)}
              className={`${styles.item} ${
                selectedCategory === categ ? styles.active : ""
              }`}
            >
              {categ}
            </div>
          );
        })}
      </div>
      <div className={styles.sort}>
        <Sort />
      </div>
    </div>
  );
};

export default Category;
