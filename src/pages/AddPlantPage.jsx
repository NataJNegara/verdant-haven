import { useParams } from "react-router-dom";
import CreatePlantForm from "../features/plants/CreatePlantForm";

export default function AddPlantPage() {
  const { plantId } = useParams();

  return (
    <div className="w-full max-w-xs p-4 mx-auto my-20 lg:my-32 md:max-w-3xl">
      <h1 className="mb-4 text-5xl font-semibold text-gray-700">
        {plantId ? "Update Plant Form" : "Add Plant Form"}
      </h1>
      <div className="divider before:h-[1px] after:h-[1px]"></div>
      <CreatePlantForm />
    </div>
  );
}
