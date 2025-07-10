import React from 'react';

interface GoogleIconProps {
  size?: number;
  className?: string;
}

const GoogleIcon: React.FC<GoogleIconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_993_771)">
      <path d="M19.805 10.2305C19.805 9.55047 19.7482 8.90047 19.6482 8.27047H10.2V12.0255H15.605C15.37 13.2505 14.63 14.2705 13.555 14.9755V17.2255H16.655C18.505 15.5255 19.805 13.1305 19.805 10.2305Z" fill="#4285F4"/>
      <path d="M10.2 20.0005C12.7 20.0005 14.77 19.1755 16.655 17.2255L13.555 14.9755C12.505 15.6755 11.23 16.1005 10.2 16.1005C7.785 16.1005 5.735 14.3905 4.965 12.2155H1.755V14.5405C3.635 17.7155 6.675 20.0005 10.2 20.0005Z" fill="#34A853"/>
      <path d="M4.965 12.2155C4.765 11.7155 4.65 11.1755 4.65 10.6155C4.65 10.0555 4.765 9.51547 4.965 9.01547V6.69047H1.755C1.135 7.93047 0.8 9.22547 0.8 10.6155C0.8 12.0055 1.135 13.3005 1.755 14.5405L4.965 12.2155Z" fill="#FBBC05"/>
      <path d="M10.2 5.90047C11.34 5.90047 12.355 6.29547 13.165 7.06547L16.715 3.51547C14.77 1.71547 12.7 0.800469 10.2 0.800469C6.675 0.800469 3.635 3.08547 1.755 6.69047L4.965 9.01547C5.735 6.84047 7.785 5.90047 10.2 5.90047Z" fill="#EA4335"/>
    </g>
    <defs>
      <clipPath id="clip0_993_771">
        <rect width="19" height="19.2" fill="white" transform="translate(0.8 0.800469)"/>
      </clipPath>
    </defs>
  </svg>
);

export default GoogleIcon;