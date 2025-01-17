import type { SVGProps } from 'react'
const Property1PL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_15815)">
      <path d="M0 0H30V19.9996H0V0Z" fill="currentColor" />
      <path d="M0 0H30V9.99978H0V0Z" fill="currentColor" />
      <path d="M0 10H30V19.9998H0V10Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_162_15815">
        <rect width={30} height={20} rx={4} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)
export { Property1PL }
