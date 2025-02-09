import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./PizzaItemFavor.module.scss";
import { FavorPizza, PizzaItemProps } from "../interfaces/interface";
import { setDeleteFavoritPizza } from "../../redux/priceSlice";
import { useDispatch } from "react-redux";
import { setDelCount } from "../../redux/countSlice";
const PizzaItemFavor = (props: FavorPizza) => {
  const dispatch = useDispatch();
  function handleDeleteFavoritePizza(pr: FavorPizza) {
    dispatch(setDeleteFavoritPizza(pr));
    dispatch(setDelCount(pr.id));
  }
  return (
    <div className={styles.item}>
      <div className={styles.imgCont}>
        <img src={props.image_url} alt="" />
      </div>
      <div className={styles.itemChld}>
        <p>{`${props.name}: ${props.sizes}`}</p>
        <p>{` ${props.ingredients} `}</p>
      </div>
      <TiDeleteOutline
        className={styles.icon}
        onClick={() => handleDeleteFavoritePizza(props)}
      />
    </div>
  );
};

export default PizzaItemFavor;
