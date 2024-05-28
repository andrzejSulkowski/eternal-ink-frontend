import React from 'react'
import type { EIProps } from '@/types'
import { classNames } from '@/utils/className'
import { Status, TxId, getStatusColor, trim, displayStatus } from '@/libs/transaction'

interface Props extends EIProps {
    status: Status,
    message: string,
    txId: TxId
}

function RetrievedMessage({className, status, message, txId}: Props) {
  return (
    <div className={classNames('bg-ei-primary-light/10 px-4 pt-5 pb-10 rounded-2xl border-solid border border-ei-primary-dark font-manrope flex flex-col gap-4 text-sm', className)}>
        {/* Header */}
        <div className='flex justify-between'>
            <div>
                <span className='text-ei-primary-faded mr-4'>Status:</span>
                <span className={classNames(getStatusColor(status), "font-bold")}>{displayStatus(status)}</span>
            </div>
            <div>
                <span className='text-ei-primary-faded mr-4'>Transaction:</span>
                <span className='text-white font-bold'>{trim(txId)}</span>
            </div>
        </div>
        {/* Body */}
        <div className='flex flex-col pt-8 border-t-ei-primary-dark border border-transparent gap-3'>
            <span className='text-ei-primary-faded'>Engraved Message:</span>
            <span className='text-white font-extrabold text-xl'>{message}</span>
        </div>
    </div>
  )
}

export default RetrievedMessage