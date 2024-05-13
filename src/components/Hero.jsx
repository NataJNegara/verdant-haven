import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="min-h-screen px-8 hero lg:px-16">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 ">
        <div className="self-center ">
          <h1 className="text-2xl font-semibold uppercase lg:text-5xl lg:mb-16">
            Where Green Dreams Blossom!
          </h1>
          <p className="py-6">
            Welcome to our verdant sanctuary, where every leaf whispers
            tranquility and every bloom radiates joy. Step into a world where
            nature&apos;s beauty flourishes, and discover the perfect plant
            companions to enrich your space and soul. Whether you&apos;re a
            seasoned green thumb or just beginning your botanical journey, our
            plant shop is your oasis of inspiration and guidance. Let&apos;s
            cultivate a greener, happier world together, one plant at a time.
          </p>
          <Link to="/shop" className="text-white btn btn-success">
            Shop Now
          </Link>
        </div>
        <img
          src="/plants/thumbnail/hero.jpg"
          className="content-end w-full row-start-1 mb-8 justify-self-end lg:row-start-auto lg:mb-0 lg:w-auto"
        />
      </div>
    </div>
  );
}
