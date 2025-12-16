import HomepageCarusel from "../components/HomepageCarusel";
import HomepageCarusel2 from "../components/HomepageCarusel2";
import HomepageHero from "../components/HomepageHero";
import ShoeReviews from "../components/ShoeReviews";

const Homepage = () => {

  return (
    <section>
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-6xl md:text-[100px] lg:text-[140px] font-bold leading-tight uppercase">
          <span className="text-[#1F7A4D]">Original</span> shoes
        </h1>

        <div>
          <HomepageCarusel />
        </div>

        <div>
          <HomepageHero />
        </div>

        <div>
          <HomepageCarusel2 />
        </div>
      <div>
        <ShoeReviews />
      </div>
      </div>
    </section>
  );
};

export default Homepage;
