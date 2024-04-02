import { useEffect } from "react";
import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function LoginPage() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "authenticated") {
      navigate("/");
    }
  }, [user?.role, navigate]);

  if (isLoading) return <Loader />;

  return (
    <div className="w-full max-w-xs p-4 mx-auto my-20 lg:my-48 md:max-w-lg">
      <h1 className="mb-4 text-5xl font-semibold text-gray-700">Login</h1>
      <p>Hi, Welcome back 👋</p>
      <div className="divider before:h-[1px] after:h-[1px]"></div>
      <LoginForm />
    </div>
  );
}
