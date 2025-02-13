import React, { useContext, useEffect, useState } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import styles from "./Pizza.module.scss";
import { PizzaItemProps } from "../interfaces/interface";
import { useSelector } from "react-redux";
import { selectCategory, selectPizza } from "../../redux/pizzaSlice";
const Pizza = () => {
  const data = useSelector(selectPizza);
  const categ = useSelector(selectCategory);
  const dataFilter = (dataF: PizzaItemProps[], categ: string) => {
    if (categ === "Все") {
      return dataF;
    } else {
      return dataF.filter((pz) => pz.category === categ);
    }
  };
  const filterData = dataFilter(data, categ);

  return (
    <div className={styles.pizzaInfo}>
      {filterData?.map((pz: PizzaItemProps) => (
        <PizzaItem key={pz.id} {...pz} />
      ))}
    </div>
  );
};

export default Pizza;
