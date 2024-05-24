import React from 'react'

interface Props {
    textContent: string;
}

function Button({textContent}: Props) {
  return (
    <div className='font-semibold text-ei-black bg-white rounded-2xl px-6 py-3 text-sm font-manrope cursor-pointer'>{textContent}</div>
  )
}

export default Button