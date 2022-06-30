import React from 'react'

const MoreVertSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7"
      cy="12"
      r="2"
      transform="rotate(-90 7 12)"
      fill="currentColor"
    />
    <circle
      cx="17"
      cy="12"
      r="2"
      transform="rotate(-90 17 12)"
      fill="currentColor"
    />
  </svg>
)

export default MoreVertSvg
