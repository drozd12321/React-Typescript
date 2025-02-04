import React from "react";
import { SlBasket } from "react-icons/sl";
import pizzaLogo from "../../assets/img/pizza-logo.svg";
import styles from "./Header.module.scss";
import { useSelector, UseSelector } from "react-redux";
import { selectedPrice } from "../../redux/priceSlice";
const Header = () => {
  const state = useSelector(selectedPrice);
  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.img}>
            <img src={pizzaLogo} alt="" />
          </div>
          <div>
            <h1>React Pizza</h1>
            <span>Самая вкусная пицца</span>
          </div>
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.splitBtn}>
            <span>{state}</span>
            <span className={styles.separator}></span>
            <span>
              {" "}
              <SlBasket className={styles.BtnIcon} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
