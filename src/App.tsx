import { useState } from "react";
import { MyContext } from "./data/Context";
import CartFavorites from "./components/CartFavorites/CartFavorites";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PizzaItemCart from "./components/PizzaItemCart/PizzaItemCart";
import Authorization from "./components/Authorization/Authorization";
function App() {
  const [favorite, setFavorite] = useState(false);
  const [anim] = useAutoAnimate();
  return (
    <MyContext.Provider value={{ favorite, setFavorite }}>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<CartFavorites />} />
        <Route path="/cartitem/:id" element={<PizzaItemCart />}></Route>
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
=======
      <div ref={anim}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<CartFavorites />} />
          <Route path="/cartitem/:id" element={<PizzaItemCart />}></Route>
        </Routes>
      </div>
>>>>>>> 458b66619880b5d907eb0573704826276ae16fd8
    </MyContext.Provider>
  );
}

export default App;
