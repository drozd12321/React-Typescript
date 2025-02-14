import React, { useState } from "react";
import styles from "./SingUp.module.scss";
const SingUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} action="submit">
        <div className={styles.formfield}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            //  onChange={}
          />
        </div>
        <div className={styles.formfield}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            //  onChange={}
          />
        </div>
        <button>Войти</button>
      </form>
    </div>
  );
};

export default SingUp;
