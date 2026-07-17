import { ContactForm } from "@/components/sections/ContactForm";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import MainBody from "@/components/sections/MainBody";
import { TechStack } from "@/components/ui/tech-stack";
import { Separator } from "@/components/ui/separator";
import { sanityFetch } from "@/sanity/lib/live";
import { getAboutMeQuery, getExperienceQuery, getTechStackQuery } from "@/lib/sanity.queries";

export default async function Home() {
  const { data: aboutMeData } = await sanityFetch({ query: getAboutMeQuery });
  const { data: experienceData } = await sanityFetch({ query: getExperienceQuery });
  const { data: techStackData } = await sanityFetch({ query: getTechStackQuery });

  return (
    <main className="content relative mt-24">
      <MainBody/>
      <div className="mt-8 layout-standard">
        <Separator className='dark:bg-gray-300/20' />

        <AboutMe data={aboutMeData} className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <TechStack data={techStackData} className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <Experience data={experienceData} className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <ContactForm className="pt-12" />
        <Footer />
      </div>
    </main>
  );
}
