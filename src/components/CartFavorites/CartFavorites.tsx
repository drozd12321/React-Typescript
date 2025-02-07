import React, { useCallback, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./CartFavorite.module.scss";
import { MyContext } from "../../data/Context";
import { selectPizzaFav } from "../../redux/priceSlice";
import { selectPrice } from "../../redux/priceSlice";
import { useSelector } from "react-redux";
import PizzaItemFavor from "../PizzaItemFavor/PizzaItemFavor";

const CartFavorites = () => {
  const statePrice = useSelector(selectPrice);
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
    </div>
  );
};

export default CartFavorites;
