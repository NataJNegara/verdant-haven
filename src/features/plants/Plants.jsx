import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { usePlants } from "./usePlants";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";

export default function Plants({ search }) {
  const { plants, isLoading } = usePlants();
  const navigate = useNavigate();

  const filteredPlants = plants?.filter((plant) =>
    search === ""
      ? plant
      : plant.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <Loader />;

  if (filteredPlants.length === 0)
    return (
      <div className="h-screen mt-48">
        <NotFound onNavigate={() => navigate("/")} btnText="Back to Home" />
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-16 lg:justify-start xl:gap-10 ">
      {filteredPlants.map((item) => (
        <Link to={`/shop/${item.id}`} key={item.name}>
          <div className="h-full rounded-none w-28 md:w-72 xl:w-64 card bg-base-100">
            <figure className="overflow-hidden">
              <img
                src={item.imageUrl}
                alt="Shoes"
                className="object-cover w-full transition-all duration-300 h-fit hover:scale-110"
              />
            </figure>
            <div className="p-2 card-body">
              <p className="text-base whitespace-normal card-title">
                {item.name}
              </p>
              <p>{formatCurrency(item.price)}</p>
              <div className="card-actions">
                <div className="badge badge-outline">{item.tags}</div>
                <div className="badge badge-outline">
                  {item.stock > 0 ? item.stock + " Stock" : "Sold out"}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
