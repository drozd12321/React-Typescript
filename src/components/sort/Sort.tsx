import React, { useState } from "react";
import styles from "./Sort.module.scss";
import { category } from "../../data/data";
const Sort = () => {
  const [sort, setSort] = useState("");
  return (
    <div className={styles.sort}>
      <label htmlFor="sort">Сортировать по</label>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(event) => {
          setSort(event.target.value);
        }}
      >
        {category.map((categ, index) => {
          return (
            <option key={index} value={categ}>
              {categ}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Sort;
