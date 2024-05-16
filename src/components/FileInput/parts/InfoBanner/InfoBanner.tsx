import React from 'react'
import Info from '@/components/Svgs/Info'
import { MimeType } from '@/libs/mime-types/types'
import { mimeTypeToExtension } from '@/libs/mime-types/mime-types'


interface Props {
    allowedMimeTypes: MimeType[]
}

function InfoBanner({allowedMimeTypes}: Props) {

    const getFormattedMimeTypes = () => allowedMimeTypes.map((type, idx) => idx === 0 ? ` ${mimeTypeToExtension[type]}` : `, ${mimeTypeToExtension[type]}` );

  return (
    <div className='w-full h-14 bg-ei-purple/10 text-ei-grey text-sm flex items-center gap-3 px-3 py-3 rounded-xl'>
        <Info/>
        <aside>Accepted file types: {getFormattedMimeTypes()}.</aside>
    </div>
  )
}

export default InfoBanner