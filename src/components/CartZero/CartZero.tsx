import cart from "../../assets/img/empty-cart.png";
import styles from "./CartZero.module.scss";
const CartZero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>Корзина пустая</h1>
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default CartZero;
