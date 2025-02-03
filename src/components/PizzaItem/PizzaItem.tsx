import React from "react";
import logo from "../../assets/react.svg";
import styles from "./PizzaItem.module.scss";
const PizzaItem = ({ props }) => {
  return (
    <div className={styles.containerPizza}>
      <div className={styles.pizzaImg}>
        <img src={props.image_url} alt="" />
        <p>Информация о пице</p>
      </div>
      <div className={styles.charcter}>
        <div className={styles.item}>
          <div className={`${styles.itemChld} ${styles.active}`}>
            <span>тонкая</span>
          </div>
          <div className={styles.itemChld}>
            <span>традиционная</span>
          </div>
        </div>
        <div className={styles.size}>
          <div className={`${styles.sizeChld} ${styles.active}`}>
            <span>25</span>
          </div>
          <div className={styles.sizeChld}>
            <span>30</span>
          </div>
          <div className={styles.sizeChld}>
            <span>40</span>
          </div>
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
