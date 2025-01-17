import type { SVGProps } from 'react'
const Property1DK = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16663)">
      <path d="M0 0H30V20H0V0Z" fill="currentColor" />
      <path
        d="M11.1111 0H7.60234V8.18713H0V11.6959H7.60234V20H11.1111V11.6959H30V8.18713H11.1111V0Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_162_16663">
        <rect width={30} height={20} rx={4} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)
export { Property1DK }
