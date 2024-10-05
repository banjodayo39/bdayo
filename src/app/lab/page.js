import Masonry from "@/app/lab/components/Masonry";
import DashedLine from "@/components/DashedLine";
import WorkExperience from "@/app/about/components/WorkExperience";
import Education from "@/app/about/components/Education";
import MobileSocialLinks from "@/components/MobileSocialLink";

export const metadata = {
  title: "Lab",
  description: "A collection of my experiments and projects.",
};

export default function Lab() {
  return (
    <main className="relative w-full flex justify-center items-start sm:items-center lg:items-start pt-4 sm:pt-8 lg:py-[7.75rem] pb-28 sm:pb-28 md:pb-16 lg:pb-16 px-4 sm:px-8 md:px-20 xl:px-0">
      
      <div className="max-w-screen-xl w-full h-full">
      <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="flex flex-col justify-center items-start">
              <h1 className="text-2xl sm:text-5xl md:text-4xl text-neutral-700 dark:text-neutral-200 font-apple font-sans ">
                Dayo Banjo
              </h1>
                <p className="text-neutral-500 text-sm">Software Engineer</p>
              </div>
            </div>
          </div>

          <MobileSocialLinks />
          <div className="w-full flex flex-col items-start gap-2 text-neutral-700 dark:text-neutral-300 leading-7">
            <h3 className="font-medium">Publications</h3>
          </div>
          <div className="w-full relative hidden sm:block">
            <DashedLine direction="horizontal" className="top-0" />
          </div>
          <div className="w-full flex flex-col gap-4 text-neutral-700 dark:text-neutral-300 leading-7 relative">
            <WorkExperience />
          </div>
          <div className="w-full relative">
            <DashedLine
              direction="horizontal"
              className="top-0 hidden sm:block"
            />
            <DashedLine
              direction="horizontal"
              className="block sm:hidden top-0 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="w-full flex flex-col gap-4 text-neutral-700 dark:text-neutral-300 leading-7 relative">
            <Education />
          </div>
          <div className="block sm:hidden w-full relative">
            <DashedLine
              direction="horizontal"
              className="top-0 left-1/2 -translate-x-1/2"
            />
          </div>
        <Masonry />
        
      </div>
    </main>
  );
}
