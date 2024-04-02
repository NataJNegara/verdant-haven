import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlant } from "../../services/apiPlants";

export function usePlant() {
  const { plantId } = useParams();

  const { data: plant, isLoading } = useQuery({
    queryFn: () => getPlant(plantId),
    queryKey: ["plant", plantId],
  });

  return { plant, isLoading };
}
