import React, { useEffect, useState } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import styles from "./Pizza.module.scss";
const Pizza = () => {
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
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.pizzaInfo}>
      {data.map((pz, ind) => (
        <PizzaItem key={ind} props={pz} />
      ))}
    </div>
  );
};

export default Pizza;
