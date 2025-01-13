import type { SVGProps } from 'react'
const Property1BO = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16826)">
      <path d="M0 0H30V6.66667H0V0Z" fill="currentColor" />
      <path d="M0 6.66602H30V13.3327H0V6.66602Z" fill="currentColor" />
      <path d="M0 13.334H30V20.0007H0V13.334Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_162_16826">
        <rect width={30} height={20} rx={4} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)
export { Property1BO }