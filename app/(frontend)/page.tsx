'use client'
import { ContactForm } from "@/components/sections/ContactForm";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import MainBody from "@/components/sections/MainBody";
import { TechStack } from "@/components/ui/tech-stack";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="content relative mt-24">
      <MainBody/>
      <div className="mt-8 layout-standard">
        <Separator className='dark:bg-gray-300/20' />

        <AboutMe className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <TechStack className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <Experience className='my-20' />

        <Separator className='dark:bg-gray-300/20' />

        <ContactForm className="pt-12" />
        <Footer />
      </div>
    </main>
  );
}
