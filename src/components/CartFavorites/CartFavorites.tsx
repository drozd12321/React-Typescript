import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./CartFavorite.module.scss";
import { MyContext } from "../../data/Context";
const CartFavorites = () => {
  const { favorite } = useContext(MyContext);
  console.log(favorite);
  return (
    <div className={`${styles.content} ${favorite ? styles.active : ""}`}>
      <div className={styles.fle}>
        <div className={styles.item}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.item}>
          <p>React Pizza</p>
        </div>
        <div>
          <IoMdClose className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default CartFavorites;
