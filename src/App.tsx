import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Category from "./components/category/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Header />
      <Category />
    </div>
  );
}

export default App;
