import React from 'react'

const FileSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4C4 2.89543 4.89543 2 6 2H9.42105C11.0779 2 12.4211 3.34315 12.4211 5V7.5C12.4211 8.88071 13.5403 10 14.9211 10H17C18.6569 10 20 11.3431 20 13V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 4C4 2.89543 4.89543 2 6 2H9.23393C11.5937 2 13.8332 3.04186 15.3532 4.84691L18.1193 8.13163C19.3339 9.57399 20 11.399 20 13.2847V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default FileSvg
