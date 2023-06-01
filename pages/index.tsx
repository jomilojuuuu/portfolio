import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";

function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            {/* Header  */}
            <Header />

            {/* hero */}
            <section id="hero"  className="snap-start">
                <Hero />
            </section>

            {/* about */}
            <section id="about" className="snap-center">
                <About />
            </section>
            {/* experience */}
            <section id="experience" className="snap-center">
                <Experience />
            </section>
            {/* skills */}
            <section id="skills" className="snap-center">
                <Skills />
            </section>
            {/* projects */}
            <section id="projects" className="snap-center">
                <Project />
            </section>

            {/* contact Me */}
            <section id="contact" className="snap-center">
                <Contact />
            </section>
        </div>
    );
}

export default Home;
