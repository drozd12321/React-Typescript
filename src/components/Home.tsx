import React, { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import styles from "../App.module.scss";
import CartFavorites from "./CartFavorites/CartFavorites";
import Header from "./header/Header";
import Category from "./category/Category";
import Pizza from "./Pizza/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { AppDispach, fetchData, selectLoading } from "../redux/pizzaSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Home = () => {
  const [favorite, setFavorite] = useState(false);
  const loading = useSelector(selectLoading);
  const [anim] = useAutoAnimate();
  const dispatch = useDispatch<AppDispach>();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {favorite && (
            <div
              ref={anim}
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
