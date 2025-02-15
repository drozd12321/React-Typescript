import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { selectedPrice } from "../../redux/priceSlice";
import { useContext } from "react";
import pizzaLogo from "../../assets/img/pizza-logo.svg";
import styles from "./Header.module.scss";
import { MyContext } from "../../data/Context";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { selectActive } from "../../redux/pizzaSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Header = () => {
  const state = useSelector(selectedPrice);
  const { favorite } = useContext(MyContext);
  const { setFavorite } = useContext(MyContext);
  const stateActive = useSelector(selectActive);
  const [anim] = useAutoAnimate();
  function handleCartFavorite() {
    setFavorite(!favorite);
  }
  console.log(stateActive);
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
        <div ref={anim} className={styles.btnDiv}>
          {stateActive ? (
            <Link to="/profil">
              <button className={styles.splitBtn}>
                <IoHome />
              </button>
            </Link>
          ) : (
            <Link to="/authorization">
              <button className={styles.splitBtn}>Войти</button>
            </Link>
          )}
          <button className={styles.splitBtn}>
            <span>{state}</span>
            <span className={styles.separator}></span>
            <span>
              {" "}
              <Link to="/favorites">
                <SlBasket
                  onClick={() => {
                    handleCartFavorite();
                  }}
                  className={styles.BtnIcon}
                />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
