import { useState } from "react";
import { MyContext } from "./data/Context";
import CartFavorites from "./components/CartFavorites/CartFavorites";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PizzaItemCart from "./components/PizzaItemCart/PizzaItemCart";
function App() {
  const [favorite, setFavorite] = useState(false);
  const [anim] = useAutoAnimate();
  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
      <div ref={anim}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<CartFavorites />} />
          <Route path="/cartitem/:id" element={<PizzaItemCart />}></Route>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
