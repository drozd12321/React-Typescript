import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Pizza from "./components/Pizza/Pizza";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://e44567109e5642cf.mokky.dev/items"
        );
        const rezult = await response.json();
        setData(rezult);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.app}>
      {data.map((pz, ind) => (
        <div key={ind}>{pz.name}</div>
      ))}
      <Header />
      <div className={styles.content}>
        <Category />
      </div>
      <Pizza />
    </div>
  );
}

export default App;
