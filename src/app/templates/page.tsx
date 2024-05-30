import React from 'react'
import type { EIProps } from '@/types'
import { classNames } from '@/utils/className'

interface Props extends EIProps {}

function page({className}: Props) {
  return (
    <div className={classNames('', className)}>templates page</div>
  )
}

export default page