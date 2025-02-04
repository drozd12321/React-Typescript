import React, { useContext, useEffect, useState } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import styles from "./Pizza.module.scss";
import { MyContext } from "../../data/Context";
const Pizza = () => {
  const data = useContext(MyContext);
  return (
    <div className={styles.pizzaInfo}>
      {data?.data.map((pz, ind) => (
        <PizzaItem key={ind} {...pz} />
      ))}
    </div>
  );
};

export default Pizza;
