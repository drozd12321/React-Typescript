import React, { useContext, useEffect, useState } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import styles from "./Pizza.module.scss";
import { MyContext } from "../../data/Context";
import { PizzaItemProps } from "../interfaces/interface";
import { useSelector } from "react-redux";
import { selectPizza } from "../../redux/pizzaSlice";
const Pizza = () => {
  const data = useSelector(selectPizza);
  return (
    <div className={styles.pizzaInfo}>
      {data?.map((pz: PizzaItemProps) => (
        <PizzaItem key={pz.id} {...pz} />
      ))}
    </div>
  );
};

export default Pizza;
