import React from 'react'
import type { EIProps } from '@/types'
import { classNames } from '@/utils/className'

interface Props extends EIProps {}

function NotFound({className}: Props) {
  return (
    <div className={classNames('', className)}>not-found</div>
  )
}

export default NotFound