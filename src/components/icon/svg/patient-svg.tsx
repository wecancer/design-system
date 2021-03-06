import React from 'react'

const PatientSvg = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 21.5L1.16547 20.4362C1.37405 19.0954 2.24842 17.9469 3.54504 17.5466C5.13654 17.0553 7.49052 16.5 10 16.5C12.5095 16.5 14.8635 17.0553 16.455 17.5466C17.7516 17.9469 18.6259 19.0954 18.8345 20.4362L19 21.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12C12.7614 12 15 9.76142 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 4C17.5 3.17157 18.1716 2.5 19 2.5H22C22.8284 2.5 23.5 3.17157 23.5 4V9.5C23.5 11.1569 22.1569 12.5 20.5 12.5C18.8431 12.5 17.5 11.1569 17.5 9.5V4Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <line x1="17" y1="4.5" x2="24" y2="4.5" stroke="currentColor" />
    <line x1="18" y1="10.5" x2="23" y2="10.5" stroke="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8.5C20 8.77614 20.2239 9 20.5 9C20.7761 9 21 8.77614 21 8.5V8H21.5C21.7761 8 22 7.77614 22 7.5C22 7.22386 21.7761 7 21.5 7H21V6.5C21 6.22386 20.7761 6 20.5 6C20.2239 6 20 6.22386 20 6.5V7H19.5C19.2239 7 19 7.22386 19 7.5C19 7.77614 19.2239 8 19.5 8H20L20 8.5Z"
      fill="currentColor"
    />
    <path
      d="M20 12C20 13.0622 20.1993 14.0161 20.4231 14.8554C20.6552 15.7257 20.8878 16.3955 21.0088 17.0311C21.1256 17.6443 21.1036 18.0814 20.9064 18.4374C20.7075 18.7965 20.2728 19.1762 19.3244 19.5318L19.6756 20.4682C20.7272 20.0738 21.4175 19.5785 21.7811 18.9219C22.1464 18.2624 22.1244 17.5432 21.9912 16.8439C21.8622 16.167 21.5948 15.368 21.3894 14.5977C21.1757 13.7964 21 12.9378 21 12H20Z"
      fill="currentColor"
    />
  </svg>
)

export default PatientSvg
