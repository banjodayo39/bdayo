import Link from "next/link";
import { formatDate } from "@/helpers/date";

export default function ExperimentPreview({ experiments }) {
  const { slug, name, preview, src, url } = experiments;

  let href = "";
  let target = "_self";
  let externalIcon = false;
  if (experiments.type === "internal" || experiments.mdx === true) {
    href = `/lab/${slug}`;
  } else {
    href = experiments.href;
    target = "_blank";
    externalIcon = true;
  }

  return (
    <Link
      prefetch={true}
      href={url}
      target={target}
      className="w-full h-auto group rounded-xl outline-none focus-visible:ring-1 ring-neutral-950 dark:ring-neutral-50"
    >
      <div className="w-full h-auto p-1 rounded-xl bg-gradient-to-t from-neutral-300 dark:from-neutral-850 to-neutral-200 dark:to-neutral-925 border border-neutral-300 dark:border-neutral-850">
        <div
          className="w-full h-auto relative overflow-hidden rounded-lg"
          style={{
            // aspectRatio: `${resolution.width} / ${resolution.height}`,
          }}
        >
           {experiments.type === "internal" ? (
            <video
              autoPlay
              muted
              playsInline
              loop
              src={`/lab/${slug}/base.mp4`}
              // width={resolution.width}
              // height={resolution.height}
              type="video/mp4"
              className="w-full h-auto relative z-20"
              style={{
                // aspectRatio: `${resolution.width} / ${resolution.height}`,
              }}
            />
          ) : (
            <img
             // src="https://i.imgur.com/OB0y6MR.jpg" // Image for non-internal experiments
              // src="/resources/IMG_4787.png"// Image for non-internal experiments
              // alt={name}
              // width={resolution.width}
              // height={resolution.height}
              // className="w-full h-auto relative z-20"
              // style={{
              //   aspectRatio: `${resolution.width} / ${resolution.height}`,
              // }}
              src={src} // Static image for non-internal experiments
              alt={name}
              className="w-full h-auto relative z-20"
              style={{
                //objectFit: "cover", // Ensures the image covers the container without distortion
                objectFit: "contain", 
              }}
            />
          )}
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              
              // backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
              backgroundColor: '#000000',

            }}            
          />
          <div className="absolute top-0 left-0 h-full w-full z-30 bg-gradient-to-b opacity-75 from-transparent from-0% to-neutral-925 group-hover:opacity-95 transition-all duration-500" />
          <div className="absolute top-0 left-0 h-full w-full z-40">
            <div className="p-3 sm:p-4 w-full h-full flex justify-between items-end">
              <div className="text-xs sm:text-sm text-neutral-300 flex gap-1 justify-start items-center">
                <span>{name}</span>
                {externalIcon && <ExternalIcon />}
              </div>
              {/* <p className="text-xs sm:text-sm text-neutral-400">
                {formatDate(date)}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="size-3 stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}
