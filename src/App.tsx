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
import { useDispatch, useSelector } from "react-redux";
import { AppDispach, fetchData, selectLoading } from "./redux/pizzaSlice";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const dispatch = useDispatch<AppDispach>();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const [favorite, setFavorite] = useState(false);

  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<CartFavorites />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
