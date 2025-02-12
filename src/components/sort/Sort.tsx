import React, { useEffect, useState } from "react";
import styles from "./Sort.module.scss";
import { sorting } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { selectPizza, setPizza } from "../../redux/pizzaSlice";
import { b } from "motion/react-client";
import PizzaItemFavor from "../PizzaItemFavor/PizzaItemFavor";
import { PizzaItemProps } from "../interfaces/interface";
const Sort = () => {
  const [sort, setSort] = useState("");
  const [arrSort, setArrSort] = useState<PizzaItemProps[]>([]);
  const statePizza = useSelector(selectPizza);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sort) {
      setArrSort(statePizza);
    } else {
      switch (sort) {
        case "Алфафиту":
          const sortedIt = [...statePizza].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return a === b ? 0 : NaN;
          });
          setArrSort(sortedIt)!;
      }
      switch (sort) {
        case "Популярности":
          const sortedIt = [...statePizza].sort((a, b) => {
            if (a.rating < b.rating) return 1;
            if (a.rating > b.rating) return 1;
            return a === b ? 0 : NaN;
          });
          setArrSort(sortedIt);
      }
    }
  }, [sort]);
  useEffect(() => {
    if (arrSort.length > 0) {
      dispatch(setPizza(arrSort));
    }
  }, [arrSort]);
  return (
    <div className={styles.sort}>
      <label htmlFor="sort">Сортировать по:</label>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(event) => {
          setSort(event.target.value);
        }}
      >
        {sorting.map((categ, index) => {
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
