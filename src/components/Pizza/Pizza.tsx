import React, { useContext, useEffect, useState } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import styles from "./Pizza.module.scss";
import { MyContext } from "../../data/Context";
import { PizzaItemProps } from "../interfaces/interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispach, fetchData, selectPizza } from "../../redux/pizzaSlice";
const Pizza = () => {
  const dispatch = useDispatch<AppDispach>();
  const data = useSelector(selectPizza);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(data);
  return (
    <div className={styles.pizzaInfo}>
      {data?.map((pz: PizzaItemProps) => (
        <PizzaItem key={pz.id} {...pz} />
      ))}
    </div>
  );
};

export default Pizza;
