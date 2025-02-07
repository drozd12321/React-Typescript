import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

import styles from "./PizzaItemFavor.module.scss";
import { PizzaItemProps } from "../interfaces/interface";
const PizzaItemFavor = ({ image_url, name, price }: PizzaItemProps) => {
  console.log(price);
  return (
    <div className={styles.item}>
      <div className={styles.imgCont}>
        <img src={image_url} alt="" />
      </div>
      <p>{`${name}: ${price}`}</p>
      <TiDeleteOutline className={styles.icon} />
    </div>
  );
};

export default PizzaItemFavor;
