import React from "react";

interface Props {
  icon: React.JSX.Element;
}

function IconStyles({ icon }: Props) {
  return <div className="bg-ei-primary-royal/40 rounded-full w-16 aspect-square p-4 flex justify-center items-center">{icon}</div>;
}

export default IconStyles;
