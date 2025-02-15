import { useState } from "react";
import styles from "./Authorization.module.scss";
import SingUp from "./SingUp/SingUp";
import Auth from "./Auth/Auth";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Authorization = () => {
  const [active, setActive] = useState("Войти");
  function handleActive(name: string) {
    setActive(name);
  }
  const [anim] = useAutoAnimate();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div
          onClick={() => handleActive("Войти")}
          className={`${styles.itemChld} ${
            active === "Войти" ? styles.active : ""
          }`}
        >
          Войти
        </div>
        <div
          onClick={() => handleActive("Зарегестрироватся")}
          className={`${styles.itemChld} ${
            active === "Зарегестрироватся" ? styles.active : ""
          }`}
        >
          Зарегестрироватся
        </div>
      </div>
      <div ref={anim}>{active === "Войти" ? <SingUp /> : <Auth />}</div>
    </div>
  );
};

export default Authorization;
