import React, { useState } from "react";
import { useContext } from "react";
import styles from "./PizzaItem.module.scss";
import { PizzaItemProps } from "../interfaces/interface";
import { TYPE } from "../../data/data";
import { useDispatch } from "react-redux";
import { setPriceTotal, setPrice } from "../../redux/priceSlice";
import { setFavorites } from "../../redux/pizzaSlice";
const PizzaItem = (props: PizzaItemProps) => {
  const [count, setCount] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const dispatch = useDispatch();
  function handleSizeSelected(size: string) {
    setSelectedSize(size);
  }
  function handleTypePizza(type: number) {
    setSelectedType(type);
  }
  function handleCountPizza(pizza: PizzaItemProps) {
    setCount(count + 1);
    if (selectedSize) {
      const price = Number(props.sizes[selectedSize].replace("₽", ""));
      dispatch(setPriceTotal(price));
      dispatch(setFavorites(pizza.id));
      dispatch(setPrice(price));
    }
  }
  return (
    <div className={styles.containerPizza}>
      <div className={styles.pizzaImg}>
        <img src={props.image_url} alt="" />
        <p>{props.name}</p>
      </div>
      <div className={styles.charcter}>
        <div className={styles.item}>
          {props.types.map((typ, ind) => (
            <div
              key={ind}
              onClick={() => handleTypePizza(typ)}
              className={`${styles.itemChld} ${
                selectedType === typ ? styles.active : ""
              }`}
            >
              <span>{TYPE[typ]}</span>
            </div>
          ))}
        </div>
        <div className={styles.size}>
          {Object.entries(props.sizes).map(([key, size]) => (
            <div
              key={key}
              className={`${styles.sizeChld} ${
                selectedSize === key ? styles.active : ""
              }`}
            >
              <span onClick={() => handleSizeSelected(key)}>{key}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.check}>
        <div className={styles.checkChld}>
          <span>
            Цена:{" "}
            {selectedSize ? props.sizes[selectedSize].replace("₽", "") : 0}
          </span>
        </div>
        <div
          className={`${styles.checkChld} ${count ? styles.active : ""}`}
          onClick={selectedSize ? () => handleCountPizza(props) : () => {}}
        >
          <span>Добавить </span>
          <span>{count === 0 ? "" : count}</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
