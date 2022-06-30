import React from 'react'

const SpinnerSolidSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
  >
    <defs />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M10 1.67A8.33 8.33 0 1018.33 10"
    />
  </svg>
)

export default SpinnerSolidSvg
