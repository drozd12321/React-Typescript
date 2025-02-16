import { useState } from "react";
import { MyContext } from "./data/Context";
import CartFavorites from "./components/CartFavorites/CartFavorites";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PizzaItemCart from "./components/PizzaItemCart/PizzaItemCart";
import Authorization from "./components/Authorization/Authorization";
import Profil from "./components/Profil/Profil";
function App() {
  const [favorite, setFavorite] = useState(false);
  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
      <Routes>
        <Route path="/React-Typescript" element={<Home />} />
        <Route path="/React-Typescript/favorites" element={<CartFavorites />} />
        <Route
          path="/React-Typescript/cartitem/:id"
          element={<PizzaItemCart />}
        ></Route>
        <Route
          path="/React-Typescript/authorization"
          element={<Authorization />}
        />
        <Route path="/React-Typescript/profil" element={<Profil />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
