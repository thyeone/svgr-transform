import type { SVGProps } from 'react'
const Property1CI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16743)">
      <path d="M0.0078125 0H30.0078V19.9996H0.0078125V0Z" fill="currentColor" />
      <path d="M19.3594 0H30.0113V20.0002H19.3594V0Z" fill="currentColor" />
      <path d="M0.0078125 0H10.6597V20.0002H0.0078125V0Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_162_16743">
        <rect x={0.0078125} width={30} height={20} rx={4} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)
export { Property1CI }
