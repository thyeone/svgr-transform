import type { SVGProps } from 'react'
const Property1ID = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16323)">
      <path d="M0.0078125 0H30.0078V20H0.0078125V0Z" fill="currentColor" />
      <path d="M0.0078125 0H30.0078V10H0.0078125V0Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_162_16323">
        <rect x={0.0078125} width={30} height={20} rx={4} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)
export { Property1ID }