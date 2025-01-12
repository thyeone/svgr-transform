import type { SVGProps } from "react";
const Property1IS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16270)">
      <path d="M0 0H30V20.0002H0V0Z" fill="#0052B4" />
      <path
        d="M30 12.3371H11.8474V20.0002H7.17393V12.3371H0V7.66301H7.17393V0H11.8474V7.66301H30V11.25V12.3371Z"
        fill="#fff"
      />
      <path
        d="M30 8.75022V11.25H10.7609V20.0002H8.26043V11.25H0V8.75022H8.26043V0H10.7609V8.75022H30Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_162_16270">
        <rect width={30} height={20} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export { Property1IS };
