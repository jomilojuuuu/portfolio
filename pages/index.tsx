import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import React from "react";

function Home() {
    return (
        <div className="bg-[#181918] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            {/* Header  */}
            <Header />

            {/* hero */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>

            {/* contact Me */}
            {/* <section id="contact" className="snap-start">
                <Contact />
            </section> */}
        </div>
    );
}

export default Home;
