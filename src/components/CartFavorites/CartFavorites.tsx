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
import Home from "../Home";
import CartZero from "../CartZero/CartZero";

const CartFavorites = () => {
  const statePizzaFavorites = useSelector(selectPizzaFav);
  const selectTotalPrice = useSelector(selectedPrice);
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
          <IoMdClose className={styles.icon} />
        </Link>
      </div>
      <div className={styles.favoritePizza}>
        {statePizzaFavorites
          ? statePizzaFavorites.map((piz, index) => (
              <PizzaItemFavor key={index} {...piz} />
            ))
          : ""}
      </div>
      {statePizzaFavorites.length > 0 ? (
        <div className={styles.price}>
          <p>Цена: </p>
          <p>{selectTotalPrice}</p>
        </div>
      ) : (
        <CartZero />
      )}
    </div>
  );
};

export default CartFavorites;
