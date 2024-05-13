import Filter from "../../components/Filter";

export default function PlantsOperations() {
  return (
    <div className="flex gap-4 lg:flex-col">
      <Filter
        filterField="category"
        options={[
          { value: "all", label: "All" },
          { value: "plants", label: "Plants" },
          { value: "pots", label: "Pots" },
          { value: "fertilizer", label: "Fertilizer" },
        ]}
      />
    </div>
  );
}
