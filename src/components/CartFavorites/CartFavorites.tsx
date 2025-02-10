import React, { useCallback, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./CartFavorite.module.scss";
import { MyContext } from "../../data/Context";
import { selectPizzaFav, selectPrice } from "../../redux/priceSlice";
import { useSelector } from "react-redux";
import PizzaItemFavor from "../PizzaItemFavor/PizzaItemFavor";

const CartFavorites = () => {
  const { setFavorite } = useContext(MyContext);
  const statePizzaFavorites = useSelector(selectPizzaFav);
  function handlFavorite() {
    setFavorite(false);
  }
  return (
    <div className={styles.cart}>
      <div className={styles.fle}>
        <div className={styles.item}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.item}>
          <p>React Pizza</p>
        </div>
        <div>
          <IoMdClose className={styles.icon} onClick={() => handlFavorite()} />
        </div>
      </div>
      <div className={styles.favoritePizza}>
        {statePizzaFavorites
          ? statePizzaFavorites.map((piz, index) => (
              <PizzaItemFavor key={index} {...piz} />
            ))
          : ""}
      </div>
      <div className={styles.price}>
        <p>Цена: </p>
        <p>350 Р</p>
      </div>
    </div>
  );
};

export default CartFavorites;
