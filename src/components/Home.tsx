import React, { useState } from "react";
import Loader from "./Loader/Loader";
import styles from "../App.module.scss";
import CartFavorites from "./CartFavorites/CartFavorites";
import Header from "./header/Header";
import Category from "./category/Category";
import Pizza from "./Pizza/Pizza";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/pizzaSlice";
const Home = () => {
  const [favorite, setFavorite] = useState(false);
  const loading = useSelector(selectLoading);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {favorite && (
            <div
              className={`${styles.favorit} ${favorite ? styles.active : ""}`}
            >
              <CartFavorites />
            </div>
          )}
          <div className={`${styles.app} ${favorite ? styles.active : ""}`}>
            <Header />
            <div className={styles.content}>
              <Category />
            </div>
            <Pizza />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
