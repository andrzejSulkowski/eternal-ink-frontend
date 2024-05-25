import React from 'react'
import { FaChevronRight } from "react-icons/fa";

interface Props {
    onClick?: () => void;
    className?: string;
}

function ChevronRight({ onClick, className }: Props) {
  return (
    <div className={["flex justify-center items-center bg-[#242438] text-white cursor-pointer", className].join(' ')} onClick={onClick}>
        <FaChevronRight className='w-1/3'/>
    </div>
  )
}

export default ChevronRight