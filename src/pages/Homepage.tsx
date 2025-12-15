import HomepageCarusel from "../components/HomepageCarusel";
import HomepageHero from "../components/HomepageHero";

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

      </div>
    </section>
  );
};

export default Homepage;
