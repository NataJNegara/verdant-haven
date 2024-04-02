import { Link } from "react-router-dom";

export default function HomeDetail() {
  return (
    <div className=" p-8 lg:p-16">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/plants/thumbnail/hero-2.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="h-full w-full flex flex-col justify-between text-sm lg:text-base text-gray-200 font-light">
          <div className="max-w-md p-8 lg:p-16">
            <p className="mb-3">Welcome to Verdant Haven</p>
            <p className="mb-3">
              At Verdant Haven, we believe in the power of plants to transform
              spaces and uplift moods.
            </p>
            <Link to="/about" className="underline underline-offset-4">
              Learn more &rarr;
            </Link>
          </div>
          <div className="flex lg:flex-row flex-col p-8 lg:p-16 gap-4 lg:gap-8">
            <div className="max-w-md">
              <p className="mb-2">Planting Tips</p>
              <p>
                Planting tips that can help you nurture a healthy and thriving
                garden.
              </p>
              <Link to="/#" className="underline underline-offset-4">
                Learn more &rarr;
              </Link>
            </div>
            <div className="max-w-md">
              <p className="mb-2">Workshop</p>
              <p>
                Join us for an enriching and interactive workshop dedicated to
                the art and science of plant care. Whether you&apos;re a
                seasoned plant enthusiast or just starting your green journey.
              </p>
              <Link to="/#" className="underline underline-offset-4">
                Learn more &rarr;
              </Link>
            </div>
            <div className="max-w-md">
              <p className="mb-2">Help Us Combating Climate Change</p>
              <p>
                You can donate by visiting https://kitabisa.com or contacting us
                directly at +62 123 4567 8901.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
