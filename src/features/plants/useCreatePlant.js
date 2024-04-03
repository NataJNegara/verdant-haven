import { useMutation } from "@tanstack/react-query";
import { addPlant } from "../../services/apiPlants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreatePlant() {
  const navigate = useNavigate();

  const { isLoading: isCreating, mutate: createPlant } = useMutation({
    mutationFn: addPlant,
    onSuccess: () => {
      toast.success("New Plant has been added");
      navigate("/product");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createPlant };
}
