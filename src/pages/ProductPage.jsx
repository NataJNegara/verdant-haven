import { Link } from "react-router-dom";
import PlantItems from "../features/plants/PlantItems";
import { usePlants } from "../features/plants/usePlants";
import Loader from "../components/Loader";
import { LuPlus } from "react-icons/lu";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function ProductPage() {
  const { plants, isLoading } = usePlants();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentPlants = plants?.slice(indexOfFirstItem, indexOfLastItem);
  const plantsCount = plants?.length;
  const pageCount = Math.ceil(plantsCount / postPerPage);

  if (isLoading) return <Loader />;

  return (
    <div className="customContainer">
      <div className="container-wrapper">
        <div className="flex justify-between">
          <h1 className="section-header">Products</h1>
          <Link
            to="/create"
            className="bg-green-500 btn hover:bg-green-600 text-green-50">
            <LuPlus /> Add Product
          </Link>
        </div>
        <div>
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] font-semibold">
            <p>Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Stock</p>
            <p className="text-center">Discount</p>
            <p className="text-center">Action</p>
          </div>
          <div className="divider before:h-[1px] after:h-[1px]"></div>
          <ul className="flex flex-col gap-4">
            {currentPlants.map((plant) => (
              <PlantItems key={plant.id} plant={plant} />
            ))}
          </ul>
        </div>
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        currentPage={currentPage}
        plantsCount={plantsCount}
        indexOfLastItem={indexOfLastItem}
      />
    </div>
  );
}
