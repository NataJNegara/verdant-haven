import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";

const recommendItem = [
  {
    id: 1,
    name: "Aglaonama Jungle Red",
    price: "45000",
    imageUrl: "/plants/Aglaonema-Jungle-Red.jpg",
    stock: 2,
  },
  {
    id: 2,
    name: "Calathea Rufibarba",
    price: "50000",
    imageUrl: "/plants/calathea-rufibarba.jpg",
    stock: 4,
  },
  {
    id: 3,
    name: "Scindapsus Pictus",
    price: "60000",
    imageUrl: "/plants/Scindapsus-pictus.jpg",
    stock: 5,
  },
  {
    id: 4,
    name: "Zamioculcas Zamiifolia",
    price: "50000",
    imageUrl: "/plants/Zamioculcas-zamiifolia.jpg",
    stock: 2,
  },
];

export default function RecommendItems() {
  return (
    <section className="section">
      <p className="text-xl text-center">Best choice of the season</p>
      <div className="flex flex-wrap justify-center gap-16 mt-16">
        {recommendItem.map((item) => (
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
  );
}
