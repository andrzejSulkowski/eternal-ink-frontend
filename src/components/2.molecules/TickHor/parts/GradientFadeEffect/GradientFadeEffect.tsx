import React from 'react';

interface Props {
    children: React.ReactNode;
}

function GradientFadeEffect({children}: Props) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-1/6 pointer-events-none bg-gradient-to-r from-black to-transparent z-40"></div>
      <div className="absolute top-0 right-0 h-full w-1/6 pointer-events-none bg-gradient-to-l from-black to-transparent z-40"></div>
      <div className="relative z-10 bg-black text-white p-5">
        {children}
      </div>
    </div>
  );
}

export default GradientFadeEffect;