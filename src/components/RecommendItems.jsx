import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import { usePlants } from "../features/plants/usePlants";
import Loader from "./Loader";

export default function RecommendItems() {
  const { plants, isLoading } = usePlants();
  const newArrival = plants?.slice(0, 4);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <section className="section">
          <p className="text-xl text-center">New arrival</p>
          <div className="flex flex-wrap justify-center gap-16 mt-16">
            {newArrival.map((item) => (
              <Link to={`/shop/${item.id}`} key={item.name}>
                <div className="rounded-none card bg-base-100">
                  <figure className="overflow-hidden ">
                    <img
                      src={item.imageUrl}
                      alt="Shoes"
                      className="transition-all duration-300 h-96 w-fit hover:scale-110"
                    />
                  </figure>
                  <div className="p-0 pt-2 card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{formatCurrency(item.price)}</p>
                    <div className="justify-end card-actions">
                      <div className="badge badge-outline">Indoor</div>
                      <div className="badge badge-outline">
                        {item.stock} available
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/shop"
            className="block mt-16 text-center underline underline-offset-4">
            More &rarr;
          </Link>
        </section>
      )}
    </>
  );
}
