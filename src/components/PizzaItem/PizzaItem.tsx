import React from "react";
import { useContext } from "react";
import styles from "./PizzaItem.module.scss";
import { PizzaItemProps } from "../interfaces/interface";
import { MyContext } from "../../data/Context";
import { TYPE } from "../../data/data";
const PizzaItem: React.FC<PizzaItemProps> = (props) => {
  const context = useContext(MyContext)?.data;
  console.log(context);
  return (
    <div className={styles.containerPizza}>
      <div className={styles.pizzaImg}>
        <img src={props.image_url} alt="" />
        <p>{props.name}</p>
      </div>
      <div className={styles.charcter}>
        <div className={styles.item}>
          {props.types.map((typ, ind) => (
            <div key={ind} className={`${styles.itemChld} `}>
              <span>{TYPE[typ]}</span>
            </div>
          ))}
        </div>
        <div className={styles.size}>
          {Object.entries(props.sizes).map(([key, size]) => (
            <div key={key} className={`${styles.sizeChld}`}>
              <span>{key}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.check}>
        <div className={styles.checkChld}>
          <span>Цена</span>
        </div>
        <div className={`${styles.checkChld} ${styles.active}`}>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
