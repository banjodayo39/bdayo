import Link from "next/link";

export default function MobileSocialLink({ type }) {
  let href = "";
  let label = "";

  if (type === "github") {
    href = "https://github.com/banjodayo39";
    label = "GitHub";
  } else if (type === "linkedin") {
    href = "https://www.linkedin.com/in/banjo-dayo-samuel/";
    label = "LinkedIn";
  } else if (type === "medium") {
    href = "https://banjodayo39.medium.com/";
    label = "Medium";
  } else if (type === "twitter") {
    href = "https://x.com/theExcellen";
    label = "Twitter";
  }

  return (
    <Link
      href={href}
      target="_blank"
      className="h-full w-full relative flex justify-center items-center text-neutral-700 dark:text-neutral-200"
      aria-label={label}
    >
      {type === "github" && <GithubIcon />}
      {type === "linkedin" && <LinkedInIcon />}
      {type === "medium" && <MediumIcon />}
      {type === "twitter" && <TwitterIcon />}
    </Link>
  );
}

function GithubIcon() {
  return (
    <svg
      className="size-8 pointer-events-none"
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
      className="size-8 pointer-events-none"
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

function MediumIcon() {
  return (
    <svg
    className="size-8 pointer-events-none"
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
    className="size-8 pointer-events-none"
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
