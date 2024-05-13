import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../../services/apiPlants";
import { useSearchParams } from "react-router-dom";

export function usePlants() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("category");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue };

  const {
    data: plants,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getPlants({ filter }),
    queryKey: ["plants", filter],
  });

  return { plants, isLoading, error };
}
