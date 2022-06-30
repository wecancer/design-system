import React from 'react'

const TimeSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 7V13L14.5 15.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default TimeSvg
