import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { CoreValues } from "@/components/CoreValues";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage({ onInquiryClick }: { onInquiryClick: () => void }) {
  return (
    <>
      <Hero />
      <About />
      <Business />
      <CoreValues />
      <Contact onInquiryClick={onInquiryClick} />
    </>
  );
}
