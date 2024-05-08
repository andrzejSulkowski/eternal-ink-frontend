import React from 'react'
import PropTypes from 'prop-types'

interface Props{
    placeholder: string;
    value: string | undefined;
    onInput: (value: string) => void;
}


const defaultCSS = 'text-primary-faded stroke-dark-purple'
const focusCSS = 'text-primary stroke-dark-purple stroke-primary'


function Input({placeholder, value}: Props) {
  return (
    <input className='border bg-light-purple stroke-1 rounded px-4 py-4 text-white stroke-primary' placeholder={placeholder} value={value}></input>
  )
}

Input.propTypes = {}

export default Input
