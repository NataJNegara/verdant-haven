import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const { isLoading: isSignUp, mutate: signUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success("Your account is added, login now.");
      navigate("/login");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSignUp, signUp };
}
