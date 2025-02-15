import styles from "./SingUp.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import Registr from "../../Registr/Registr";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setActiv } from "../../../redux/pizzaSlice";
import { setData } from "../../../redux/profil";
interface IProps {
  email: string;
  password: string;
}
const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProps>();
  const onSubmit = async (data: IProps) => {
    console.log(data);
    const res = await axios.get(
      "https://e44567109e5642cf.mokky.dev/authorization"
    );
    const nameRegisr = res.data.some(
      (item: IProps) => item.password === data.password
    );
    const registr = res.data.some((item: IProps) => item.email === data.email);
    if (registr && nameRegisr) {
      reset();
      setTimeout(() => {
        navigate("/");
      }, 3000);
      dispatch(setActiv(true));
      dispatch(setData(data));
      return;
    }
  };
  return (
    <div className={styles.formContainer}>
      <Registr namee="воошли в аккаунт" />
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
