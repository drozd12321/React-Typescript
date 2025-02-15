import styles from "./Registr.module.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import { selectActive } from "../../redux/pizzaSlice";
const Registr = ({ namee }: { namee: string }) => {
  const [anim] = useAutoAnimate();
  const stateActive = useSelector(selectActive);
  return (
    <div
      ref={anim}
      className={stateActive ? `${styles.item} ${styles.active}` : styles.item}
    >
      <div>
        <h1>Вы успешно {namee}</h1>
        <button>ОК</button>
      </div>
    </div>
  );
};

export default Registr;
