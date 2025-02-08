import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <FaSpinner className={`${styles.spinner} ${styles.rotate}`} />
    </div>
  );
};

export default Loader;
