import { useState, useEffect } from "react";
import { MyContext } from "./data/Context";
import CartFavorites from "./components/CartFavorites/CartFavorites";
import { useDispatch } from "react-redux";
import { AppDispach, fetchData } from "./redux/pizzaSlice";
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
