"use client";

import React from "react";
import clsx from "clsx";
import NameOffScreenCanvas from "./NameOffScreenCanvas";
import VisuallyHidden from "@/components/VisuallyHidden";
import useWindowBreakpoints from "@/hooks/useWindowBreakpoints";

export default function Name() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const breakpoint = useWindowBreakpoints({
    isMobile: true,
  });
  const environment = process.env.NODE_ENV;

  return (
    <div className="w-full h-auto aspect-[700/329] sm:aspect-[2304/384]">
      <svg
        width="700"
        height="329"
        viewBox="0 0 1400 658"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-10 pointer-events-none fill-neutral-950 dark:fill-neutral-50",
          "block sm:hidden",
          isLoaded && "animate-fade-out-300 animation-delay-1000"
        )}
      >
        <path d="M164.772 271L220.068 117.64H263.484L318.78 271H280.332L270.18 242.056H213.156L203.22 271H164.772ZM223.308 212.248H260.244L241.884 158.248L223.308 212.248ZM335.422 271V117.64H392.23C436.078 117.64 457.678 130.6 457.678 160.192C457.678 178.552 446.014 189.568 425.062 191.728C450.766 193.888 464.158 205.984 464.158 227.584C464.158 256.096 442.774 271 400.87 271H335.422ZM373.006 241.408H402.166C416.206 241.408 426.358 235.792 426.358 223.696C426.358 211.816 416.422 205.984 402.166 205.984H373.006V241.408ZM373.006 180.064H396.118C410.158 180.064 419.878 174.88 419.878 163.864C419.878 152.2 410.59 147.232 396.118 147.232H373.006V180.064ZM488.774 271V117.64H526.358V178.336H577.766V117.64H615.35V271H577.766V209.224H526.358V271H488.774ZM639.383 117.64H676.967V271H639.383V117.64ZM738.435 213.112C738.651 233.2 745.995 243.784 759.171 243.784C772.779 243.784 779.907 233.848 779.907 215.272V117.64H817.707V215.272C817.707 250.696 793.515 274.456 758.091 274.456C724.611 274.456 701.067 250.048 700.851 215.056L738.435 213.112ZM843.782 117.64H953.942V148.312H881.366V178.768H951.35V209.44H881.366V240.328H955.67V271H843.782V117.64ZM979.415 117.64H1089.57V148.312H1017V178.768H1086.98V209.44H1017V240.328H1091.3V271H979.415V117.64ZM1234.93 117.64V148.312H1189.57V271H1151.77V148.312H1106.41V117.64H1234.93ZM402.542 486.296C404.918 501.2 415.718 510.92 433.43 510.92C446.174 510.92 455.03 505.736 455.03 496.016C454.598 486.08 446.39 480.896 424.79 475.712C388.502 467.072 367.766 453.248 367.766 428.624C367.766 400.112 391.958 382.184 428.678 382.184C463.454 382.184 487.214 403.352 490.886 435.104L453.518 436.832C452.222 421.712 442.286 412.424 427.814 412.424C414.422 412.424 405.134 419.12 405.998 429.272C406.646 440.288 419.606 444.176 434.942 447.848C471.23 455.408 493.046 470.312 493.046 495.152C493.046 524.528 467.558 541.592 432.566 541.592C393.902 541.592 367.118 520.856 364.958 488.024L402.542 486.296ZM514.192 385.64H551.776V539H514.192V385.64ZM581.059 385.64H620.587L676.315 481.976V385.64H714.115V539H673.291L618.643 446.552V539H581.059V385.64ZM880.214 539H857.966L856.238 517.832C848.462 533.168 831.182 542.456 809.798 542.456C766.598 542.456 736.79 508.328 736.79 462.536C736.79 416.528 766.382 382.184 812.39 382.184C847.814 382.184 872.438 402.704 879.782 437.048L840.686 438.776C837.014 422.36 826.862 412.856 811.526 412.856C786.902 412.856 775.454 433.592 775.454 462.536C775.454 491.264 787.118 511.784 811.526 511.784C828.806 511.784 838.958 500.984 841.982 484.568H811.094V458.432H880.214V539ZM904.215 539V385.64H941.799V446.336H993.207V385.64H1030.79V539H993.207V477.224H941.799V539H904.215Z" />
      </svg>
      <svg
        width="2304"
        height="384"
        viewBox="0 0 2304 384"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-10 pointer-events-none fill-neutral-950 dark:fill-neutral-50",
          "hidden sm:block",
          isLoaded && "animate-fade-out-300 animation-delay-1000"
        )}
      >
        <path d="M80.031 282L145.567 100.24H197.023L262.559 282H216.991L204.959 247.696H137.375L125.599 282H80.031ZM149.407 212.368H193.183L171.423 148.368L149.407 212.368ZM282.283 282V100.24H349.611C401.579 100.24 427.179 115.6 427.179 150.672C427.179 172.432 413.355 185.488 388.523 188.048C418.987 190.608 434.859 204.944 434.859 230.544C434.859 264.336 409.515 282 359.851 282H282.283ZM326.827 246.928H361.387C378.027 246.928 390.059 240.272 390.059 225.936C390.059 211.856 378.283 204.944 361.387 204.944H326.827V246.928ZM326.827 174.224H354.219C370.859 174.224 382.379 168.08 382.379 155.024C382.379 141.2 371.371 135.312 354.219 135.312H326.827V174.224ZM464.033 282V100.24H508.577V172.176H569.505V100.24H614.049V282H569.505V208.784H508.577V282H464.033ZM642.533 100.24H687.077V282H642.533V100.24ZM759.927 213.392C760.183 237.2 768.887 249.744 784.503 249.744C800.631 249.744 809.079 237.968 809.079 215.952V100.24H853.879V215.952C853.879 257.936 825.207 286.096 783.223 286.096C743.543 286.096 715.639 257.168 715.383 215.696L759.927 213.392ZM884.783 100.24H1015.34V136.592H929.327V172.688H1012.27V209.04H929.327V245.648H1017.39V282H884.783V100.24ZM1045.53 100.24H1176.09V136.592H1090.08V172.688H1173.02V209.04H1090.08V245.648H1178.14V282H1045.53V100.24ZM1348.36 100.24V136.592H1294.6V282H1249.8V136.592H1196.04V100.24H1348.36ZM1468.71 219.536C1471.52 237.2 1484.32 248.72 1505.32 248.72C1520.42 248.72 1530.92 242.576 1530.92 231.056C1530.4 219.28 1520.68 213.136 1495.08 206.992C1452.07 196.752 1427.49 180.368 1427.49 151.184C1427.49 117.392 1456.16 96.144 1499.68 96.144C1540.9 96.144 1569.06 121.232 1573.41 158.864L1529.12 160.912C1527.59 142.992 1515.81 131.984 1498.66 131.984C1482.79 131.984 1471.78 139.92 1472.8 151.952C1473.57 165.008 1488.93 169.616 1507.11 173.968C1550.12 182.928 1575.97 200.592 1575.97 230.032C1575.97 264.848 1545.76 285.072 1504.29 285.072C1458.47 285.072 1426.72 260.496 1424.16 221.584L1468.71 219.536ZM1601.03 100.24H1645.58V282H1601.03V100.24ZM1680.28 100.24H1727.13L1793.18 214.416V100.24H1837.98V282H1789.6L1724.83 172.432V282H1680.28V100.24ZM2034.84 282H2008.47L2006.42 256.912C1997.21 275.088 1976.73 286.096 1951.38 286.096C1900.18 286.096 1864.85 245.648 1864.85 191.376C1864.85 136.848 1899.93 96.144 1954.45 96.144C1996.44 96.144 2025.62 120.464 2034.33 161.168L1987.99 163.216C1983.64 143.76 1971.61 132.496 1953.43 132.496C1924.25 132.496 1910.68 157.072 1910.68 191.376C1910.68 225.424 1924.5 249.744 1953.43 249.744C1973.91 249.744 1985.94 236.944 1989.53 217.488H1952.92V186.512H2034.84V282ZM2063.28 282V100.24H2107.83V172.176H2168.76V100.24H2213.3V282H2168.76V208.784H2107.83V282H2063.28Z" />
      </svg>
      {breakpoint === "xs" && (
        <NameOffScreenCanvas
          isMobile
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          environment={environment}
        />
      )}
      {breakpoint === "sm" && (
        <NameOffScreenCanvas
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          environment={environment}
        />
      )}
      <VisuallyHidden>
        <h1>Dayo Banjo</h1>
      </VisuallyHidden>
    </div>
  );
}
