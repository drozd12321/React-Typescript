import { useState, useEffect } from "react";
import { MyContext } from "./data/Context";
import CartFavorites from "./components/CartFavorites/CartFavorites";
import { useDispatch } from "react-redux";
import { AppDispach, fetchData } from "./redux/pizzaSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PizzaItemCart from "./components/PizzaItemCart/PizzaItemCart";
import Authorization from "./components/Authorization/Authorization";
function App() {
  const [favorite, setFavorite] = useState(false);

  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<CartFavorites />} />
        <Route path="/cartitem/:id" element={<PizzaItemCart />}></Route>
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
