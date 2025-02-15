import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader/Loader";
import styles from "../App.module.scss";
import CartFavorites from "./CartFavorites/CartFavorites";
import Header from "./header/Header";
import Category from "./category/Category";
import Pizza from "./Pizza/Pizza";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispach,
  fetchData,
  selectDataLoader,
  selectLoading,
} from "../redux/pizzaSlice";
import { useNavigate, useLocation } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [favorite, setFavorite] = useState(false);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispach>();
  const dataLoader = useRef(false);
  const [anim] = useAutoAnimate();
  const stateDataLoad = useSelector(selectDataLoader);
  const stateLoading = useSelector(selectLoading);
  useEffect(() => {
    if (!stateDataLoad && !stateLoading) {
      dispatch(fetchData());
      dataLoader.current = true;
    }
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
