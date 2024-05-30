import React from 'react'
import type { EIProps } from '@/types'
import { classNames } from '@/utils/className'

interface Props extends EIProps {}

function EngravePage({className}: Props) {
  return (
    <div className={classNames('', className)}>Engrave Page</div>
  )
}

export default EngravePage