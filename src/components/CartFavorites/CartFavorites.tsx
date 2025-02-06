import React, { useCallback, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./CartFavorite.module.scss";
import { MyContext } from "../../data/Context";
import { selectPizzaFavoriters } from "../../redux/pizzaSlice";
import PizzaItem from "../PizzaItem/PizzaItem";
import { useSelector } from "react-redux";
import { PizzaItemProps } from "../interfaces/interface";
const CartFavorites = () => {
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
    [statePizza]
  );
  useEffect(() => {
    if (statePizza.pizza) {
      const pz = statePizza.pizza;
      pz.forEach((piz) => {
        if (piz.isFavorite === true) {
          AddPizzaFavorit(piz);
          console.log("fdg");
        }
      });
    }
  }, [statePizza.pizza]);
  console.log(PizzaFavorite);
  return (
    <div>
      <div className={styles.fle}>
        <div className={styles.item}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.item}>
          <p>React Pizza</p>
        </div>
        <div className={styles.item}>{/* <PizzaItem /> */}</div>
        <div>
          <IoMdClose className={styles.icon} onClick={() => handlFavorite()} />
        </div>
      </div>
    </div>
  );
};

export default CartFavorites;
