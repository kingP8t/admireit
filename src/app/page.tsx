import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeaturedBlog } from "@/components/sections/FeaturedBlog";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <FeaturedBlog />
      <CTA />
    </>
  );
}
