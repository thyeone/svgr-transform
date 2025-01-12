import type { SVGProps } from "react";
const Property1BE = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16889)">
      <path d="M0 0H30V20H0V0Z" fill="#FDDA25" />
      <path d="M0 0H10V20H0V0Z" fill="#000" />
      <path d="M20 0H30V20H20V0Z" fill="#EF3340" />
    </g>
    <defs>
      <clipPath id="clip0_162_16889">
        <rect width={30} height={20} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export { Property1BE };
