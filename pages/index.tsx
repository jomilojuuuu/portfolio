import Header from "@/components/Header";
import Hero from "@/components/Hero";
<<<<<<< HEAD
=======

>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
import React from "react";

function Home() {
    return (
<<<<<<< HEAD
        <div className="bg-[#181918] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
=======
        <div className="bg-[#181918] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
            {/* Header  */}
            <Header />
            {/* hero */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>
        </div>
    );
}

export default Home