import React from "react";
import styles from "./ModalComponent.module.scss";
import { PizzaItemProps } from "../interfaces/interface";

const ModalComponent = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (value: boolean) => void;
}) => {
  active;
  return (
    <div
      className={styles.item}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={styles.pizzaImg}>
        {/* <img src={props.image_url} alt="" />
        <p>{props.name}</p> */}
      </div>
    </div>
  );
};

export default ModalComponent;
