import { useDispatch, useSelector } from "react-redux";
import styles from "./PizzaItemCart.module.scss";
import { useParams } from "react-router-dom";
import { selectPizza } from "../../redux/pizzaSlice";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/img/pizza-logo.svg";
import { p } from "motion/react-client";
import { Link } from "react-router-dom";
import { selectedCount, setCCount } from "../../redux/countSlice";
import { useState } from "react";
import { FavorPizza, PizzaItemProps } from "../interfaces/interface";
import { setFavoritesPizza, setPriceTotal } from "../../redux/priceSlice";

const PizzaItemCart = () => {
  const count = useSelector(selectedCount);
  const [size, setSize] = useState<string>();
  const dispatch = useDispatch();
  const { id } = useParams();
  const pizzas = useSelector(selectPizza);
  const pizza = pizzas.find((pz) => String(pz.id) === id);
  const itemCurent = count.find((it) => String(it.id) === id);
  function hadleSize(size: string) {
    setSize(size);
  }
  function handleCount(props: PizzaItemProps) {
    dispatch(setCCount(id));
    if (size) {
      const price = Number(pizza?.sizes[size].replace("₽", ""));
      const obj: FavorPizza = { ...props, sizes: price, count: 1, price: 1 };
      dispatch(setPriceTotal(price));
      dispatch(setFavoritesPizza(obj));
    }
  }
  if (!pizza) return <div>Нету такой пиццы</div>;
  return (
    <div className={styles.container}>
      <div className={styles.chld}>
        <img src={logo} alt="" />
        <h2>Пицца</h2>
        <Link to="/">
          <IoMdClose />
        </Link>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={pizza.image_url} alt="" />
          <p>{pizza.name}</p>
        </div>
        <div className={styles.infoo}>
          <p>{pizza.ingredients.map((ing) => ing + " ")}</p>
          <div className={styles.inf}>
            {Object.entries(pizza.sizes).map(([key, value]) => (
              <p
                className={size === key ? styles.active : ""}
                key={key}
                onClick={() => hadleSize(key)}
              >
                {key}: {value}
              </p>
            ))}
            <button
              className={`${styles.btn} ${itemCurent ? styles.active : ""}`}
              onClick={() => handleCount(pizza)}
            >
              Добавить: {itemCurent?.count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItemCart;
