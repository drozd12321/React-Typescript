import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SingUp.module.scss";
const SingUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} action="submit">
        <div className={styles.formfield}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formfield}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>Войти</button>
      </form>
    </div>
  );
};

export default SingUp;
