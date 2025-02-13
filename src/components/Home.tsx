import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader/Loader";
import styles from "../App.module.scss";
import CartFavorites from "./CartFavorites/CartFavorites";
import Header from "./header/Header";
import Category from "./category/Category";
import Pizza from "./Pizza/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { AppDispach, fetchData, selectLoading } from "../redux/pizzaSlice";
const Home = () => {
  const [favorite, setFavorite] = useState(false);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispach>();
  const dataLoader = useRef(false);
  useEffect(() => {
    if (!dataLoader.current) {
      dispatch(fetchData());
      dataLoader.current = true;
    }
  }, [dataLoader]);
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
