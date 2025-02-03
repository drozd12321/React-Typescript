import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Pizza from "./components/Pizza/Pizza";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Category />
      </div>
      <Pizza />
    </div>
  );
}

export default App;
