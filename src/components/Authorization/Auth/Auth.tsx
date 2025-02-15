import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Auth.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
const Auth = () => {
  interface IProps {
    name: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProps>();
  const onSubmit = (data: IProps) => {
    console.log(data);
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formfield}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            {...(register("email"), { required: true })}
          />
          {errors.email && <p>{errors.password?.message}</p>}
        </div>
        <div className={styles.formfield}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            {...(register("name"), { required: true, minLength: 3 })}
          />
        </div>
        <div className={styles.formfield}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            {...(register("password"), { required: true, minLength: 6 })}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Auth;
