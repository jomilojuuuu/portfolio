import Header from "../../components/Header";
import Hero from "../../components/Hero";

function Home() {
  return (
    <div className="bg-[#181918] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      {/* Header  */}
      <Header />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
