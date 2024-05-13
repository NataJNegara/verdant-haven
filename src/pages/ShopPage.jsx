import { useState } from "react";
import Plants from "../features/plants/Plants";
import PlantsOperations from "../features/plants/PlantsOperations";
import { usePlants } from "../features/plants/usePlants";

export default function ShopPage() {
  const { plants } = usePlants();
  const [search, setSearch] = useState("");

  return (
    <div className="px-8 lg:px-16">
      <div className="flex flex-col py-16 lg:gap-16 lg:flex-row">
        <div className="w-full lg:w-40 xl:w-60">
          <p className="mb-8">Category</p>
          <PlantsOperations />
          <div className="divider before:h-[1px] after:h-[1px]"></div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="self-end w-full lg:max-w-xs">
            <label className="flex items-center gap-2 input input-bordered">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <p className="pt-4 text-sm text-end">{plants?.length} Result</p>
          </div>
          <div>
            <Plants search={search} />
          </div>
        </div>
      </div>
    </div>
  );
}
