import type { SVGProps } from "react";
const Property1MG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16073)">
      <path d="M30.0078 20.0002V0H0.0078125V20.0002H30.0078Z" fill="#6DA544" />
      <path d="M30.0078 0H0.0078125V9.99996H30.0078V0Z" fill="#D80027" />
      <path d="M0.0078125 0H10.6597V20.0002H0.0078125V0Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="clip0_162_16073">
        <rect x={0.0078125} width={30} height={20} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export { Property1MG };
