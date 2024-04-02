import { useEffect } from "react";
import RegisterForm from "../features/authentication/RegisterForm";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function RegisterPage() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "authenticated") {
      navigate("/", { replace: true });
    }
  }, [user?.role, navigate]);

  if (isLoading) return <Loader />;

  return (
    <div className="w-full max-w-xs p-4 mx-auto my-20 lg:my-32 md:max-w-lg">
      <h1 className="mb-4 text-5xl font-semibold text-gray-700">Register</h1>
      <p>Create a new account 😀</p>
      <div className="divider before:h-[1px] after:h-[1px]"></div>
      <RegisterForm />
    </div>
  );
}
