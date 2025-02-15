import { useAutoAnimate } from "@formkit/auto-animate/react";
import styles from "./ModalComponent.module.scss";

const ModalComponent = ({
  active,
  setActive,
  name,
  image,
}: {
  active: boolean;
  name: string;
  image: string;
  setActive: (value: boolean) => void;
}) => {
  const [anim] = useAutoAnimate();
  return (
    <div
      ref={anim}
      className={active ? `${styles.item} ${styles.active}` : styles.item}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={styles.pizzaImg} onClick={(e) => e.stopPropagation}>
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ModalComponent;
