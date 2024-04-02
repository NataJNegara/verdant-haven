import { Link } from "react-router-dom";
import FormRow from "../../components/FormRow";
import { LuArrowUpRight } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";

export default function RegisterForm() {
  const { isSignUp, signUp } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  function onSubmit({ email, fullName, password }) {
    signUp(
      { email, password, fullName },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email" error={errors?.email?.message}>
        <input
          disabled={isSignUp}
          className="w-full input input-bordered"
          id="email"
          type="text"
          placeholder="E.g johnDoe@example.com"
          {...register("email", {
            required: "Email is requried.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <input
          disabled={isSignUp}
          className="w-full input input-bordered"
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          {...register("fullName", {
            required: "Full name is requried.",
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <input
          disabled={isSignUp}
          className="w-full input input-bordered"
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is requried.",
            minLength: {
              value: 8,
              message: "Password should be at least contains 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm password"
        error={errors?.confirmPassword?.message}>
        <input
          disabled={isSignUp}
          className="w-full input input-bordered"
          id="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          {...register("confirmPassword", {
            required: "Confirm password is requried.",
            validate: (value) =>
              value === getValues().password || "Password is not matched",
          })}
        />
      </FormRow>

      <button
        className="bg-green-500 border-none btn hover:bg-green-600 btn-active text-green-50"
        disabled={isSignUp}>
        Register
      </button>
      <p className="flex flex-col gap-2 md:flex-row">
        Already have an account?{" "}
        <Link
          to="/login"
          className="flex items-center gap-2 font-semibold text-blue-500">
          Login now <LuArrowUpRight className="text-lg" />
        </Link>
      </p>
    </form>
  );
}
