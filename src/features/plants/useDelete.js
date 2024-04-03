import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlant as deletePlantApi } from "../../services/apiPlants";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePlant } = useMutation({
    mutationFn: deletePlantApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plants"],
      });
      toast.success("Plant deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletePlant };
}
