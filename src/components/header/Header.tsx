import React from "react";
import { SlBasket } from "react-icons/sl";
import pizzaLogo from "../../assets/img/pizza-logo.svg";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={pizzaLogo} alt="" />
        </div>
        <div>
          <h1>React Pizza</h1>
          <span>Самая вкусная пицца</span>
        </div>
        <div>
          <button className={styles.splitBtn}>
            <span>500 P</span>
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
