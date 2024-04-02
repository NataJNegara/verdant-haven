import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../../services/apiPlants";

export function usePlants() {
  const {
    data: plants,
    isLoading,
    error,
  } = useQuery({
    queryFn: getPlants,
    queryKey: ["plants"],
  });

  return { plants, isLoading, error };
}
