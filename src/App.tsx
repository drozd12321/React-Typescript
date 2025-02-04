import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Pizza from "./components/Pizza/Pizza";
import { MyContext } from "./data/Context";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://e44567109e5642cf.mokky.dev/items"
        ).then((respons) => respons.json());
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <MyContext.Provider value={{ data }}>
      <div className={styles.app}>
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
