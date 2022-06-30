import React from 'react'

const MedicineSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33286 21.1592C0.939552 18.7658 0.939551 14.8855 3.33286 12.4922L8.2854 7.53967L16.9523 16.2066L11.9998 21.1592C9.60649 23.5525 5.72617 23.5525 3.33286 21.1592Z"
      fill="currentColor"
    />
    <rect
      x="0.413603"
      y="16.8257"
      width="22.5138"
      height="10.2569"
      rx="5.12846"
      transform="rotate(-45 0.413603 16.8257)"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
)

export default MedicineSvg
