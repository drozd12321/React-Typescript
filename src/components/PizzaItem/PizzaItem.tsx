import React, { useState } from "react";
import { useContext } from "react";
import styles from "./PizzaItem.module.scss";
import { PizzaItemProps } from "../interfaces/interface";
import { MyContext } from "../../data/Context";
import { TYPE } from "../../data/data";
const PizzaItem: React.FC<PizzaItemProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  const context = useContext(MyContext)?.data;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);

  function handleSizeSelected(size: string) {
    setSelectedSize(size);
  }
  function handleTypePizza(type: number) {
    setSelectedType(type);
  }
  console.log(selectedSize);
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
        <div className={`${styles.checkChld}`}>
          <span>Добавить {count === 0 ? "" : count}</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
