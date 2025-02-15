import React from "react";
import styles from "./Registr.module.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Registr = ({
  namee,
  active,
  setActive,
}: {
  namee: string;
  active: boolean;
  setActive: (value: boolean) => void;
}) => {
  const [anim] = useAutoAnimate();
  return (
    <div
      ref={anim}
      className={active ? `${styles.item} ${styles.active}` : styles.item}
    >
      <div>
        <h1>Вы успешно {namee}</h1>
        <button onClick={() => setActive(false)}>ОК</button>
      </div>
    </div>
  );
};

export default Registr;
