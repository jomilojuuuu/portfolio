"use client";

import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio website showcasing my work and skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#D3D3D3] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
        {/* Header  */}
        <Navbar />
        {/* hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
      </div>
    </>
  );
}

export default Home;
