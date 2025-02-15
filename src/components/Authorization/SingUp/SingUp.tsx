import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SingUp.module.scss";
import { useForm } from "react-hook-form";
const SingUp = () => {
  interface IProps {
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
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div className={styles.formfield}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default SingUp;
