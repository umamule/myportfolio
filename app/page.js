import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./about";
import Blog from "./blog";
import ContactSection from "./contact";
import Education from "./education";
import Experience from "./experience";
import HeroSection from "./hero-section";
import Projects from "./projects";
import Skills from "./skills";

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`,
    {
      // Optional but recommended for Next.js caching
      next: { revalidate: 3600 }, // revalidate every 1 hour
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
