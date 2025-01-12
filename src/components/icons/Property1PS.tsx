import type { SVGProps } from "react";
const Property1PS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_15783)">
      <path d="M0.0078125 0H30.0078V19.9996H0.0078125V0Z" fill="#fff" />
      <path d="M0.0078125 0H30.0078V6.6665H0.0078125V0Z" fill="#000" />
      <path
        d="M0.0078125 13.334H30.0078V20.0005H0.0078125V13.334Z"
        fill="#268024"
      />
      <path
        d="M15.0078 10.0005L0.0078125 20.0002V0L15.0078 10.0005Z"
        fill="#E4312B"
      />
    </g>
    <defs>
      <clipPath id="clip0_162_15783">
        <rect x={0.0078125} width={30} height={20} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export { Property1PS };
