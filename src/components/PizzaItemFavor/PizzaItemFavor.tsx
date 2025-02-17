import { TiDeleteOutline } from "react-icons/ti";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import styles from "./PizzaItemFavor.module.scss";
import { FavorPizza } from "../interfaces/interface";
import {
  setDeleteFavoritPizza,
  setFavoritesPizza,
  setMinus,
  setPriceTotal,
} from "../../redux/priceSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDispatch } from "react-redux";
import { setCCount, setDelCount, setReset } from "../../redux/countSlice";
const PizzaItemFavor = (props: FavorPizza) => {
  const [anim] = useAutoAnimate();
  const dispatch = useDispatch();
  function handleDeleteFavoritePizza(pr: FavorPizza) {
    dispatch(setDeleteFavoritPizza(pr));
    dispatch(setReset(pr.id));
  }
  function handlePlus() {
    dispatch(setCCount(props.id));
    dispatch(setPriceTotal(props.sizes));
    dispatch(setFavoritesPizza(props));
  }
  function handleMinus() {
    dispatch(setMinus(props));
    dispatch(setDelCount(props.id));
  }
  if (!props.count) {
    return "";
  }
  return (
    <div ref={anim} className={styles.item}>
      <div className={styles.imgCont}>
        <img src={props.image_url} alt="" />
      </div>
      <div className={styles.itemChld}>
        <p>{`${props.name}: ${props.price} ₽`}</p>
        <p>{` ${props.ingredients} `}</p>
        <div className={styles.counter}>
          <div onClick={props.count ? handleMinus : undefined}>
            <CiCircleMinus />{" "}
          </div>
          <div>{props.count}</div>
          <div onClick={() => handlePlus()}>
            <CiCirclePlus />
          </div>
        </div>
      </div>
      <TiDeleteOutline
        className={styles.icon}
        onClick={() => handleDeleteFavoritePizza(props)}
      />
    </div>
  );
};

export default PizzaItemFavor;
