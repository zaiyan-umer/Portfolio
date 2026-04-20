'use client'
import { ContactForm } from "@/components/ContactForm";
import ContributionCalendar from "@/components/ContributionCalendar";
import Footer from "@/components/MainPage/Footer";
import MainBody from "@/components/MainPage/MainBody";
import SkillsAndCoursework from "@/components/MainPage/SkillsAndCoursework";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="content relative max-w-[90vw] md:max-w-[65vw] mx-auto mt-24">
      <MainBody/>
      <div className="mt-8 mx-auto">
        <Separator className='dark:bg-gray-300/20' />

        <ContributionCalendar className='mt-8 mb-16 mx-auto md:w-fit' />

        <Separator className='dark:bg-gray-300/20' />

        <SkillsAndCoursework className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <ContactForm className="pt-12" />
        <Footer />
      </div>
    </main>
  );
}
