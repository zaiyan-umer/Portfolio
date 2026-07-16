import ContributionCalendar from "@/components/sections/ContributionCalendar";
import { CourseWork, Certifications } from "@/components/sections/CourseWork";

export default function EducationPage() {
  return (
    <main className="layout-standard pt-32 pb-20">
      <header className="mb-10">
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          Education & Certifications
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Coursework, certifications, and ongoing activity.
        </p>
      </header>

      <div className="space-y-12">
        <ContributionCalendar className="mx-auto md:w-fit" />
        <CourseWork />
        <Certifications className="mt-8" />
      </div>
    </main>
  );
}
