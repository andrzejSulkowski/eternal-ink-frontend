import React from 'react'
import type { EIProps } from '@/types'
import { classNames } from '@/utils/className'
import PlanetLayout from '@/components/Svgs/bg/planet/PlanetLayout'

interface Props extends EIProps {}

function HeroSection({className}: Props) {
  return (
    <div className={classNames('', className)}>
        <PlanetLayout className="w-svw h-svh !absolute top-0 overflow-hidden !-z-10" />
    </div>
  )
}

export default HeroSection;