import React from "react";
import Hero from "@/components/Hero";  
import NewProducts from "@/components/NewProducts"; 
import Testimonial from "@/components/Testimonial";
import SaleBanner from "@/components/SaleBanner";
import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
      <SaleBanner />
      <MobNavbar />
      <Footer />
    </main>
  );
}