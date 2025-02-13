import React, { useState } from "react";
import styles from "./Category.module.scss";
import Sort from "../sort/Sort";
import { category } from "../../data/data";
import { setCategory } from "../../redux/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
const Category = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Все"
  );
  function hadleSelectedCategory(categor: string) {
    setSelectedCategory(categor);
    dispatch(setCategory(categor));
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
