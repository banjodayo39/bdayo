import Link from "next/link";
import MenuWrapper from "./MenuWrapper";
import clsx from "clsx";

export default function SocialMenu() {
  return (
    <MenuWrapper showOnMobile={false}>
      <div className="flex items-center justify-between gap-2 sm:gap-4 rounded-full py-1 px-3 sm:px-4 text-neutral-600 dark:text-neutral-400">
        <LinkWrapper href="https://github.com/banjodayo39" label="github">
          <GithubIcon />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.linkedin.com/in/banjo-dayo-samuel/"
          label="linkedin"
        >
          <LinkedInIcon />
        </LinkWrapper>
        <LinkWrapper href="https://banjodayo39.medium.com/" label="medium">
          <MediumIcon />
        </LinkWrapper>
        <LinkWrapper href="https://x.com/theExcellen" label="twitter">
          <TwitterIcon />
        </LinkWrapper>
        <BottomStaticGlare />
      </div>
    </MenuWrapper>
  );
}

function LinkWrapper({ children, href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-px relative rounded-full shadow-sm shadow-neutral-400 dark:shadow-black overflow-hidden group outline-none focus-visible:ring-1 ring-neutral-500 dark:ring-neutral-50"
      aria-label={label}
    >
      <div className="bg-gradient-to-tl from-neutral-50 dark:from-neutral-925 via-neutral-200 dark:via-neutral-800 to-neutral-50 dark:to-neutral-925 p-2 rounded-full z-20 relative">
        {children}
      </div>
      <div className="absolute top-0 left-0 h-full w-full rounded-full z-10 bg-gradient-to-tr from-neutral-100 dark:from-neutral-900 via-neutral-200 dark:via-neutral-800 to-neutral-100 dark:to-neutral-900 pointer-events-none" />
    </Link>
  );
}

function GithubIcon() {
  return (
    <svg
      className={clsx(
        "size-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-all duration-150 pointer-events-none",
        "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]"
      )}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className={clsx(
        "size-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-all duration-150",
        "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]"
      )}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function CodePenIcon() {
  return (
    <svg
      className={clsx(
        "size-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-all duration-150",
        "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]"
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      style={{
        transform: "translateZ(0)",
      }}
      strokeLinejoin="round"
      role="img"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CodePen</title>
      <path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg
    className={clsx(
      "size-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-all duration-150",
      "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]"
    )}
    fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Medium</title>
      <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>    </svg>
  );
}


function TwitterIcon() {
  return (
    <svg
    className={clsx(
      "size-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-all duration-150",
      "drop-shadow-none group-hover:[filter:drop-shadow(0px_0px_4px_rgba(10,_10,_10,_.5))] dark:group-hover:[filter:drop-shadow(0px_0px_4px_rgba(250,250,250,1))]"
    )}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <title>Twitter</title>
      <path d="M22.46 6.003c-.77.343-1.6.573-2.47.676a4.282 4.282 0 0 0 1.88-2.376 8.436 8.436 0 0 1-2.704 1.034 4.268 4.268 0 0 0-7.292 3.89A12.1 12.1 0 0 1 3.157 4.67a4.265 4.265 0 0 0 1.32 5.692 4.267 4.267 0 0 1-1.935-.535v.054a4.271 4.271 0 0 0 3.422 4.184 4.29 4.29 0 0 1-1.93.073 4.272 4.272 0 0 0 3.986 2.966 8.557 8.557 0 0 1-5.292 1.825c-.343 0-.68-.02-1.014-.058a12.066 12.066 0 0 0 6.54 1.92c7.848 0 12.143-6.502 12.143-12.143 0-.185-.005-.37-.014-.554A8.694 8.694 0 0 0 24 4.49a8.52 8.52 0 0 1-2.46.675z" />
    </svg>
  );
}


function BottomStaticGlare() {
  return (
    <div className="absolute top-full left-0 h-px w-1/2 bg-gradient-to-r from-transparent from-20% via-neutral-300 dark:via-neutral-700 to-transparent" />
  );
}
