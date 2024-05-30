import React from 'react'
import type { EIProps } from '@/types'
import { classNames } from '@/utils/className'

interface Props extends EIProps {}

function index({className}: Props) {
  return (
    <div className={classNames('', className)}>
      
    </div>
  )
}

export default index