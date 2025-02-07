import React, { useCallback, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./CartFavorite.module.scss";
import { MyContext } from "../../data/Context";
import { selectPizzaFavoriters } from "../../redux/pizzaSlice";
import { selectPrice } from "../../redux/priceSlice";
import { useSelector } from "react-redux";
import { PizzaItemProps } from "../interfaces/interface";
import PizzaItemFavor from "../PizzaItemFavor/PizzaItemFavor";
const CartFavorites = () => {
  const statePrice = useSelector(selectPrice);
  const { setFavorite } = useContext(MyContext);
  const statePizza = useSelector(selectPizzaFavoriters);
  const [PizzaFavorite, setPizzaFavorite] = useState<PizzaItemProps[]>([]);
  function handlFavorite() {
    setFavorite(false);
  }
  const AddPizzaFavorit = useCallback(
    (pizza: PizzaItemProps) => {
      setPizzaFavorite((prev) => [...prev, pizza]);
    },
    [statePizza.pizza]
  );
  useEffect(() => {
    if (statePizza.pizza) {
      const pz = statePizza.pizza;
      pz.forEach((piz) => {
        if (piz.isFavorite === true) {
          AddPizzaFavorit(piz);
        }
      });
    }
  }, [statePizza.pizza]);
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
        {PizzaFavorite
          ? PizzaFavorite.map((favor, index) => (
              <PizzaItemFavor
                key={favor.id}
                {...favor}
                price={statePrice[index]}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default CartFavorites;
