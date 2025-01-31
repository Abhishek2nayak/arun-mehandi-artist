"use client";
import About from "@/component/sections/AboutSection";
import Gallery from "@/component/sections/GallerySection";
import HeroSection from "@/component/sections/HeroSection";
import LocationSection from "@/component/sections/LocationSection";
import Service from "@/component/sections/ServiceSection";
import Testimonial from "@/component/sections/TestmonialSection";
import Section from "@/component/ui/SectionWrapper";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>Chenni Mehandi Artist</title>
        <meta
          name="description"
          content="Book the best Mehandi artists across Tamil Nadu, including Chennai and Coimbatore, for weddings, baby showers, and more. Professional designs using 100% organic Mehandi with no side effects."
        />
        <meta name="keywords" content="Mehandi artists Tamil Nadu, Mehandi artists Chennai, Mehandi artists Coimbatore, organic Mehandi designs, professional Mehandi artist, Tamil Nadu bridal Mehandi, baby shower Mehandi" />
        <meta name="author" content="Bridal Mehandi Art" />
        <meta property="og:title" content="Best Mehandi Artists in Tamil Nadu - Chennai, Coimbatore +15 more cities" />
        <meta
          property="og:description"
          content="Discover exquisite Mehandi services in Tamil Nadu, from weddings to baby showers. Expert Mehandi artists in Chennai, Coimbatore, and beyond. 100% organic designs."
        />
        <meta property="og:image" content="/assets/bridal.jpg" />
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <HeroSection />
      <About />
      <Service />
      <Gallery />
      <Section title="People love our work">
        <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-wrap justify-center gap-5">
  <Testimonial
    name="Anjali K."
    feedback="The mehndi design was exactly what I envisioned for my wedding. The artist's skill and professionalism made the experience truly memorable!"
    // image="https://via.placeholder.com/150"
    rating={5}
  />
  <Testimonial
    name="Priya D."
    feedback="Amazing designs and exceptional attention to detail! My bridal mehndi turned out to be stunning, and everyone loved it. Highly recommended!"
    // image="https://via.placeholder.com/150"
    rating={5}
  />
  <Testimonial
    name="Riya M."
    feedback="The artist was punctual, creative, and very friendly. The mehndi was not just beautiful but also lasted long. Would definitely book again!"
    // image="https://via.placeholder.com/150"
    rating={5}
  />
  <Testimonial
    name="Deepa N."
    feedback="Beautiful designs and a very professional approach! The mehndi artist made sure every pattern was perfect. Absolutely loved it!"
    // image="https://via.placeholder.com/150"
    rating={5}
  />
</div>


        </div>
      </Section>
      <LocationSection />
    </>
  )
}
