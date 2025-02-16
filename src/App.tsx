import { useState } from "react";
import { MyContext } from "./data/Context";
import CartFavorites from "./components/CartFavorites/CartFavorites";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import PizzaItemCart from "./components/PizzaItemCart/PizzaItemCart";
import Authorization from "./components/Authorization/Authorization";
import Profil from "./components/Profil/Profil";
function App() {
  const [favorite, setFavorite] = useState(false);
  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<CartFavorites />} />
        <Route path="/cartitem/:id" element={<PizzaItemCart />}></Route>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
