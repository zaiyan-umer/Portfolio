'use client'
import { ContactForm } from "@/components/sections/ContactForm";
import ContributionCalendar from "@/components/sections/ContributionCalendar";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import MainBody from "@/components/sections/MainBody";
import SkillsAndCoursework from "@/components/sections/SkillsAndCoursework";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="content relative max-w-[90vw] md:max-w-[65vw] mx-auto mt-24">
      <MainBody/>
      <div className="mt-8 mx-auto">
        <Separator className='dark:bg-gray-300/20' />

        <AboutMe className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <ContributionCalendar className='mt-8 mb-16 mx-auto md:w-fit' />

        <Separator className='dark:bg-gray-300/20' />

        <Experience className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <SkillsAndCoursework className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <ContactForm className="pt-12" />
        <Footer />
      </div>
    </main>
  );
}
