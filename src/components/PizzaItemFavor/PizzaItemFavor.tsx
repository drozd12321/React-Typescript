import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import styles from "./PizzaItemFavor.module.scss";
import { FavorPizza, PizzaItemProps } from "../interfaces/interface";
import {
  setDeleteFavoritPizza,
  setMinus,
  setPlus,
} from "../../redux/priceSlice";
import { useDispatch } from "react-redux";
import { setCCount, setDelCount, setReset } from "../../redux/countSlice";
const PizzaItemFavor = (props: FavorPizza) => {
  const dispatch = useDispatch();
  function handleDeleteFavoritePizza(pr: FavorPizza) {
    dispatch(setDeleteFavoritPizza(pr));
    dispatch(setReset(pr.id));
  }
  function handlePlus() {
    dispatch(setPlus(props));
    dispatch(setCCount(props.id));
  }
  function handleMinus() {
    dispatch(setMinus(props));
    dispatch(setDelCount(props.id));
  }
  return (
    <div className={styles.item}>
      <div className={styles.imgCont}>
        <img src={props.image_url} alt="" />
      </div>
      <div className={styles.itemChld}>
        <p>{`${props.name}: ${props.sizes}`}</p>
        <p>{` ${props.ingredients} `}</p>
        <div className={styles.counter}>
          <div onClick={() => handleMinus()}>
            <CiCircleMinus />{" "}
          </div>
          <div>{props.count}</div>
          <div onClick={() => handlePlus()}>
            <CiCirclePlus />
          </div>
        </div>
      </div>
      <TiDeleteOutline
        className={styles.icon}
        onClick={() => handleDeleteFavoritePizza(props)}
      />
    </div>
  );
};

export default PizzaItemFavor;
