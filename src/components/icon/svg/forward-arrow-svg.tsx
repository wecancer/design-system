import React from 'react'

const ForwardArrowSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.2827 5L20.9998 12L14.2827 19"
    />
    <line
      x1="19.7329"
      y1="12.0317"
      x2="3.99985"
      y2="12.0317"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
)

export default ForwardArrowSvg
