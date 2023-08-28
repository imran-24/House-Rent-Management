import React from 'react'
import Container from '../container'
import { filters } from '@/utils/constant'
import FilterBox from './filter-box'

const Filters = () => {
  return (
    <Container>
        <div className='
        flex 
        items-center 
        overflow-x-auto
        gap-3
        py-3
        shadow
        md:shadow-sm
        '>
            {filters.map(category => (
                <FilterBox 
                  key={category.label}
                  icon={category.icon}
                  label={category.label}
                    // selected={category.label == categoryParam}
                />
            ))}
            <div className='text-xs font-bold'>
              Clear all
            </div>
        </div>
        
    </Container>
  )
}

export default Filters