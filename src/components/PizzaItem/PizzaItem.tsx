import React from "react";
import logo from "../../assets/react.svg";
import styles from "./PizzaItem.module.scss";
const PizzaItem = () => {
  return (
    <div className={styles.containerPizza}>
      <div className={styles.pizzaImg}>
        <img src={logo} alt="" />
        <p>Информация о пице</p>
      </div>
      <div>
        <div>
          <span>тонкая</span>
          <span>традиционная</span>
        </div>
        <div>
          <span>25</span>
          <span>30</span>
          <span>40</span>
        </div>
      </div>
      <div>
        <span>Цена</span>
        <span>Добавить</span>
      </div>
    </div>
  );
};

export default PizzaItem;
