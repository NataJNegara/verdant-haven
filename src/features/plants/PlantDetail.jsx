import { LuCheckCircle, LuPlus, LuStar, LuSunMedium } from "react-icons/lu";
import { formatCurrency } from "../../utils/helpers";
import { usePlant } from "./usePlant";
import Loader from "../../components/Loader";

export default function PlantDetail() {
  const { plant, isLoading } = usePlant();

  if (isLoading) return <Loader />;

  const currentPrice = ((100 - 20) / 100) * plant.price;

  let lights;
  if (plant.light === "low") {
    lights = <LuSunMedium className="text-xl" />;
  } else if (plant.light === "medium") {
    lights = (
      <>
        <LuSunMedium className="text-xl" />
        <LuSunMedium className="text-xl" />
      </>
    );
  } else {
    lights = (
      <>
        <LuSunMedium className="text-xl" />
        <LuSunMedium className="text-xl" />
        <LuSunMedium className="text-xl" />
      </>
    );
  }

  return (
    <div className="max-w-screen-lg px-8 mx-auto">
      <div className="flex flex-col justify-center gap-16 mt-12 md:mt-24 lg:flex-row">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-[500px] h-fit self-center lg:self-start"
        />
        <div className="grow">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-gray-700 uppercase">
              {plant.name}
            </h2>
            <p className="flex items-center gap-2">
              <LuStar className="fill-gray-700" />{" "}
              <span>{`${plant.rating} ${
                plant.rating > 4.5 ? "(MOST POPULAR)" : ""
              }`}</span>
            </p>
            <div className="flex gap-4">
              {plant.tags.map((tag) => (
                <span
                  className="px-4 text-sm border border-gray-700 rounded-full first-letter:uppercase"
                  key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="divider before:h-[1px] after:h-[1px]"></div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">{`${
              plant.stock > 0 ? plant.stock + " Available" : "OUT OF STOCK"
            }`}</p>
            <div className="flex flex-wrap items-center gap-4">
              {plant.discount ? (
                <>
                  <span className="px-2 bg-gray-200 rounded-full">
                    {plant.discount}% OFF
                  </span>
                  <div className="flex gap-4">
                    <p className="text-xl">{formatCurrency(currentPrice)}</p>
                    <p className="text-xl text-gray-500 line-through">
                      {formatCurrency(plant.price)}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-xl">{formatCurrency(plant.price)}</p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {lights} <span>Lighting</span>
              </div>
            </div>
            <button
              disabled={plant.stock === 0}
              className="text-green-700 bg-green-100 border-none rounded-full btn hover:bg-green-200">
              <LuPlus /> Add to cart
            </button>
          </div>
          <div className="divider before:h-[1px] after:h-[1px]"></div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <LuCheckCircle /> <span>Easy care</span>
            </p>
            <p className="flex items-center gap-2">
              <LuCheckCircle /> <span>Made to order</span>
            </p>
            <p className="flex items-center gap-2">
              <LuCheckCircle /> <span>Green Shipping</span>
            </p>
            <p className="flex items-center gap-2">
              <LuCheckCircle /> <span>30-day Guarantee</span>
            </p>
          </div>
          <div className="divider before:h-[1px] after:h-[1px]"></div>
          <div>
            <p>{plant.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
