import React from "react";

interface Props {
  className?: string;
}

function Check({className}: Props) {
  return (
    <div className={["flex items-center justify-center", className].join(' ')}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9334 15.0667C12.4 14.5333 11.6 14.5333 11.0667 15.0667C10.5334 15.6 10.5334 16.4 11.0667 16.9333L15.0667 20.9333C15.3334 21.2 15.6 21.3333 16 21.3333C16.4 21.3333 16.6667 21.2 16.9334 20.9333L26.2667 10.2667C26.6667 9.73333 26.6667 8.79999 26 8.39999C25.4667 7.99999 24.6667 7.99999 24.2667 8.53333L16 18L12.9334 15.0667Z"
          fill="#8C72F5"
        />
        <path
          d="M28 14.6666C27.2 14.6666 26.6666 15.2 26.6666 16C26.6666 21.8666 21.8666 26.6666 16 26.6666C10.1333 26.6666 5.3333 21.8666 5.3333 16C5.3333 13.2 6.39997 10.5333 8.39997 8.53329C10.4 6.39996 13.2 5.33329 16 5.33329C16.8 5.33329 17.7333 5.46663 18.5333 5.59996C19.2 5.86663 20 5.46663 20.2666 4.66663C20.5333 3.86663 20 3.33329 19.3333 3.06663H19.2C18.1333 2.79996 17.0666 2.66663 16 2.66663C8.66664 2.66663 2.66664 8.66663 2.79997 16.1333C2.79997 19.6 4.26664 23.0666 6.66664 25.4666C9.19997 28 12.5333 29.3333 16 29.3333C23.3333 29.3333 29.3333 23.3333 29.3333 16C29.3333 15.2 28.8 14.6666 28 14.6666Z"
          fill="#8C72F5"
        />
      </svg>
    </div>
  );
}

export default Check;
