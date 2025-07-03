
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div className="bg-[#D3D3D3] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      {/* Header  */}
      <Navbar />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
