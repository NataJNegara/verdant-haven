export default function Hero() {
  return (
    <div className="hero min-h-screen px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
        <div className=" self-center">
          <h1 className="text-2xl lg:text-5xl font-semibold lg:mb-16 uppercase">
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
          <button className="btn btn-success text-white">Shop Now</button>
        </div>
        <img
          src="/plants/thumbnail/hero.jpg"
          className="content-end justify-self-end row-start-1 lg:row-start-auto w-full mb-8 lg:mb-0 lg:w-auto"
        />
      </div>
    </div>
  );
}
