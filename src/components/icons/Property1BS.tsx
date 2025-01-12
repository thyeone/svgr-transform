import type { SVGProps } from "react";
const Property1BS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16810)">
      <path d="M0.0078125 0H30.0078V19.9996H0.0078125V0Z" fill="#FFC72C" />
      <path
        d="M0.0078125 0H30.0078V6.6665H0.0078125V0ZM0.0078125 13.3331H30.0078V19.9996H0.0078125V13.3331Z"
        fill="#00778B"
      />
      <path
        d="M15.0078 10.0005L0.0078125 20.0002V0L15.0078 10.0005Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="clip0_162_16810">
        <rect x={0.0078125} width={30} height={20} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export { Property1BS };
