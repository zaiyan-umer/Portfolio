'use client'
import { ContactForm } from "@/components/ContactForm";
import ContributionCalendar from "@/components/ContributionCalendar";
import Footer from "@/components/MainPage/Footer";
import MainBody from "@/components/MainPage/MainBody";
import SkillsAndCoursework from "@/components/MainPage/SkillsAndCoursework";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main key="content">
      <MainBody />
      <div className="mt-8 max-w-[80vw] mx-auto">
        <Separator className='dark:bg-gray-300/20' />

        <ContributionCalendar className='mt-8 mb-16 lg:mx-20' />

        <Separator className='dark:bg-gray-300/20' />

        <SkillsAndCoursework className='my-20 lg:mx-20' />

        <Separator className='dark:bg-gray-300/20' />

        <ContactForm className="pt-12" />
        <Footer />
      </div>
    </main>
  );
}
