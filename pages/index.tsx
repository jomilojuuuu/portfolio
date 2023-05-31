import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            {/* Header  */}
            <Header />

            {/* hero */}
            <section id="hero">
                <Hero />
            </section>

            {/* about */}

            {/* experience */}

            {/* skills */}

            {/* projects */}

            {/* contact Me */}
        </div>
    );
}

export default Home;
