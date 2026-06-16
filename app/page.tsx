import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Songs } from "@/components/sections/songs";
import { Videos } from "@/components/sections/videos";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <div className="mt-20">
          <Stats />
        </div>
        <div className="mt-32">
          <Services />
        </div>
        <div className="mt-32">
          <Songs />
        </div>
        <div className="mt-32">
          <Videos />
        </div>
        <div className="mt-32">
          <Testimonials />
        </div>
        <div className="mt-32">
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}