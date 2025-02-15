import styles from "./Auth.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import Registr from "../../Registr/Registr";
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
    reset,
  } = useForm<IProps>();
  const onSubmit = async (data: IProps) => {
    const res1 = await axios.get(
      "https://e44567109e5642cf.mokky.dev/authorization"
    );
    console.log(res1.data);
    const emailExists = res1.data.some(
      (item: IProps) => item.email === data.email
    );
    const nameExists = res1.data.some(
      (item: IProps) => item.name === data.name
    );
    if (emailExists || nameExists) {
      alert("Email или name существует");
      reset();
      return;
    } else {
      await fetch("https://e44567109e5642cf.mokky.dev/authorization", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      reset();
      return;
    }
  };
  return (
    <div className={styles.formContainer}>
      <Registr namee="успешно зарегестрированы" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formfield}>
          <label htmlFor="email">Email:</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <p>{errors.password?.message}</p>}
        </div>
        <div className={styles.formfield}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
          />
        </div>
        <div className={styles.formfield}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Auth;
