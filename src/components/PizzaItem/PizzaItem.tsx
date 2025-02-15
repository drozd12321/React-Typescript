import { forwardRef, useState } from "react";
import styles from "./PizzaItem.module.scss";
import { FavorPizza, PizzaItemProps } from "../interfaces/interface";
import { TYPE } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { selectedCount, setCCount } from "../../redux/countSlice";
import {
  setPriceTotal,
  setFavoritesPizza,
  setTotal,
} from "../../redux/priceSlice";
import ModalComponent from "../ModalComponent/ModalComponent.tsx";
import { Link } from "react-router-dom";
const PizzaItem = forwardRef((props: PizzaItemProps) => {
  const ccount = useSelector(selectedCount);
  const curentItem = ccount.find((item) => item.id === props.id)?.count || 0;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [modalState, settModal] = useState(false);
  const dispatch = useDispatch();
  function handleSizeSelected(size: string) {
    setSelectedSize(size);
  }
  function handleTypePizza(type: number) {
    setSelectedType(type);
  }
  function handleCountPizza(pizza: PizzaItemProps) {
    dispatch(setCCount(pizza.id));
    dispatch(setTotal());
    if (selectedSize) {
      const price = Number(props.sizes[selectedSize].replace("₽", ""));
      const obj: FavorPizza = { ...pizza, sizes: price, count: 1, price: 1 };
      dispatch(setPriceTotal(price));
      dispatch(setFavoritesPizza(obj));
    }
  }
  function toggleModal() {
    settModal(true);
  }
  return (
    <div className={styles.containerPizza}>
      <ModalComponent
        active={modalState}
        setActive={settModal}
        name={props.name}
        image={props.image_url}
      />
      <div className={styles.pizzaImg}>
        <img src={props.image_url} alt="" onClick={toggleModal} />
        <Link to={`/cartitem/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
      <div className={styles.charcter}>
        <div className={styles.item}>
          {props.types.map((typ, ind) => (
            <div
              key={ind}
              onClick={() => handleTypePizza(typ)}
              className={`${styles.itemChld} ${
                selectedType === typ ? styles.active : ""
              }`}
            >
              <span>{TYPE[typ]}</span>
            </div>
          ))}
        </div>
        <div className={styles.size}>
          {Object.entries(props.sizes).map(([key]) => (
            <div
              key={key}
              className={`${styles.sizeChld} ${
                selectedSize === key ? styles.active : ""
              }`}
            >
              <span onClick={() => handleSizeSelected(key)}>{key}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.check}>
        <div className={styles.checkChld}>
          <span>
            Цена:{" "}
            {selectedSize ? props.sizes[selectedSize].replace("₽", "") : 0}
          </span>
        </div>
        <div
          className={`${styles.checkChld} ${curentItem ? styles.active : ""}`}
          onClick={selectedSize ? () => handleCountPizza(props) : () => {}}
        >
          <span>Добавить </span>
          <span>{curentItem}</span>
        </div>
      </div>
    </div>
  );
});

export default PizzaItem;
