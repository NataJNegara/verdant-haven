import { Link } from "react-router-dom";
import FormRow from "../../components/FormRow";
import { LuArrowUpRight } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLogin, login } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email" error={errors?.email?.message}>
        <input
          disabled={isLogin}
          className="w-full input input-bordered"
          id="email"
          type="text"
          placeholder="E.g johnDoe@example.com"
          {...register("email", { required: "Email is requried." })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <input
          disabled={isLogin}
          className="w-full input input-bordered"
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is requried." })}
        />
      </FormRow>

      <button
        className="bg-green-500 border-none btn hover:bg-green-600 btn-active text-green-50"
        disabled={isLogin}>
        Login
      </button>
      <p className="flex flex-col gap-2 md:flex-row">
        Not registered yet?{" "}
        <Link
          disabled={isLogin}
          to="/register"
          className="flex items-center gap-2 font-semibold text-blue-500">
          Create an account <LuArrowUpRight className="text-lg" />
        </Link>
      </p>
    </form>
  );
}
