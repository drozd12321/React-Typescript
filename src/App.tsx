import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Pizza from "./components/Pizza/Pizza";
import { MyContext } from "./data/Context";
import { PizzaItemProps } from "./components/interfaces/interface";
import CartFavorites from "./components/CartFavorites/CartFavorites";
function App() {
  const [favorite, setFavorite] = useState(false);
  const [data, setData] = useState<PizzaItemProps[]>([]);
  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
      {favorite && (
        <div className={`${styles.favorit} ${favorite ? styles.active : ""}`}>
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
    </MyContext.Provider>
  );
}

export default App;
