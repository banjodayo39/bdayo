import Name from "@/app/components/Name";
import Clock from "@/app/components/Clock";
import VideoLink from "@/app/components/VideoLink";
import DashedLine from "@/components/DashedLine";
import WorkExperience from "@/app/about/components/WorkExperience";
import Education from "@/app/about/components/Education";
import MobileSocialLink from "@/components/MobileSocialLink";
import Masonry from "@/app/lab/components/Masonry";


export default function Home() {
  return (
    <main className="relative w-full flex justify-center items-start sm:items-center lg:items-start pt-4 sm:pt-8 lg:py-[7.75rem] pb-28 sm:pb-28 md:pb-16 lg:pb-16 px-4 sm:px-8 md:px-20 xl:px-0">
      <div className="max-w-screen-xl w-full h-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-4 pb-2">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-2xl sm:text-5xl md:text-4xl text-neutral-700 dark:text-neutral-200 font-apple font-sans" style={{ fontWeight: 'bold' }}>
                Dayo Banjo
              </h1>

              <p className="text-neutral-500 text-sm">Software Engineer</p>
            </div>
          </div>
        </div>

        <MobileSocialLinks />
        <div className="w-full flex flex-col items-start gap-2 text-neutral-700 dark:text-neutral-300 leading-7 pt-6">
          <h2 className="font-medium " style={{ fontWeight: 'bold' }}>Publications</h2>
        </div>
        <div className="w-full relative hidden sm:block">
          <DashedLine direction="horizontal" className="top-0" />
        </div>
        <div className="w-full flex flex-col gap-4 text-neutral-700 dark:text-neutral-300 leading-7 py-2 relative">
          <WorkExperience />
        </div>
        <div className="w-full relative">
          <DashedLine
            direction="horizontal"
            className="top-0 hidden sm:block"
          />
          <DashedLine
            direction="horizontal"
            className="block sm:hidden top-0 left-1/2 -translate-x-1/2 "
          />
        </div>
        <div className="w-full flex flex-col gap-4 text-neutral-700 dark:text-neutral-300 leading-7 pb-8 pt-2 relative">
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

function MobileSocialLinks() {
  return (
    <div className="w-full grid sm:hidden grid-cols-4 relative">
      <DashedLine
        direction="horizontal"
        className="top-0 left-1/2 -translate-x-1/2"
      />
      <div className="aspect-square">
        <MobileSocialLink type="github" />
      </div>
      <div className="aspect-square">
        <MobileSocialLink type="linkedin" />
      </div>
      <div className="aspect-square">
        <MobileSocialLink type="twitter" />
      </div>
      <div className="aspect-square">
        <MobileSocialLink type="medium" />
      </div>
      <DashedLine
        direction="horizontal"
        className="bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}