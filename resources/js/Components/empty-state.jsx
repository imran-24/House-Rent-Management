import React from 'react'
import Heading from './heading'
import { router } from '@inertiajs/react'
import Button from './button/button'

const EmptyState = ({
    title='No exact Matches',
    subtitle='Try changing or removing some of your filters',
    showReset
}) => {
  return (
    <div
    className='
    h-[60vh]
    w-full
    flex 
    flex-col
    items-center
    justify-center
    '
    >
        <Heading
        center
        title={title}
        subtitle={subtitle}
        />
        <div className='pt-2'>
        {
            showReset && 
            <Button
            outline
            small
            label='Remove all'
            onClick={()=> router.push('/')}
            />
        }
        </div>
    </div>
  )
}

export default EmptyState