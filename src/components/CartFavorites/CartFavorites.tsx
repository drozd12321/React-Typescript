import React, { useCallback, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./CartFavorite.module.scss";
import { MyContext } from "../../data/Context";
import {
  selectedPrice,
  selectPizzaFav,
  selectPrice,
} from "../../redux/priceSlice";
import { useSelector } from "react-redux";
import PizzaItemFavor from "../PizzaItemFavor/PizzaItemFavor";
import { Link } from "react-router-dom";

const CartFavorites = () => {
  const { setFavorite } = useContext(MyContext);
  const statePizzaFavorites = useSelector(selectPizzaFav);
  const selectTotalPrice = useSelector(selectedPrice);
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
        <Link to={"/"}>
          <IoMdClose className={styles.icon} onClick={() => handlFavorite()} />
        </Link>
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
        <p>{selectTotalPrice}</p>
      </div>
    </div>
  );
};

export default CartFavorites;
