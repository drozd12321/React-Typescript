import styles from "./Profil.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/profil";
import logo from "../../assets/img/pizza-logo.svg";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Profil = () => {
  const stateProfil = useSelector(selectData);
  const [anim] = useAutoAnimate();
  return (
    <div ref={anim} className={styles.container}>
      <div>
        <h1>Доброго времени суток</h1>
      </div>
      <div className={styles.item}>
        <img src={logo} alt="" />
        <div className={styles.inf}>
          <div className={styles.infChld}>
            <p>{stateProfil.email}</p>
          </div>
          <div className={styles.infChld}>
            <p>{stateProfil.password}</p>
          </div>
        </div>
      </div>
      <div>
        <Link to="/React-Typescript">
          <h2>Бегом за пиццой</h2>
        </Link>
      </div>
    </div>
  );
};

export default Profil;
