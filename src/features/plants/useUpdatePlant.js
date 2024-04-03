import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePlant as updatePlantApi } from "../../services/apiPlants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdatePlant() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isUpdating, mutate: updatePlant } = useMutation({
    mutationFn: ({ newPlant, id }) => updatePlantApi(newPlant, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plants"],
      });
      toast.success("Product updated successfully");
      navigate("/product");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updatePlant };
}
