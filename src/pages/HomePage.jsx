import Hero from "../components/Hero";
import HomeDetail from "../components/HomeDetail";
import RecommendItems from "../components/RecommendItems";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <RecommendItems />
      <HomeDetail />

      <div className="w-full p-8 lg:p-16">
        <blockquote className="max-w-screen-sm mx-auto my-16 text-4xl text-center">
          &quot;Plants are the silent guardians of our planet, breathing life
          into the world with grace and resilience.&quot;
        </blockquote>
      </div>
    </div>
  );
}
