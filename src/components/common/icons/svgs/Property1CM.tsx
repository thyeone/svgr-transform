import type { SVGProps } from 'react'
const Property1CM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={20}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_162_16726)">
      <path d="M0 0H30V20H0V0Z" fill="currentColor" />
      <path d="M0 0H10V20H0V0Z" fill="currentColor" />
      <path
        d="M20.0014 0H30.0014V20H20.0014V0ZM14.9721 5.97661L15.978 9.07602H19.2411L16.6037 10.9942L17.6096 14.0936L14.9721 12.1813L12.3347 14.0936L13.3406 10.9942L10.7031 9.07602H13.9663L14.9721 5.97661Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_162_16726">
        <rect width={30} height={20} rx={4} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)
export { Property1CM }
