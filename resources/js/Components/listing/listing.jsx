import React from 'react'
import ListingImages from './listing-images'
import ListingInfo from './listing-info'
import ListingFooter from './listing-footer'
import HeartButton from '../heart-button'

const Listing = ({listing}) => {
  return (
    <div>
        <div className='flex py-3 h-[160px] hover:shadow-lg px-6 hover:border-l-[4px] cursor-pointer transition-all transform duration-200 ease-in-out border-yellow-500  gap-3'>
            <div className=''>
            <ListingImages images={listing.images} />
            </div>
            <div className='flex flex-1 flex-col justify-between relative'>
            <ListingInfo 
                title={listing.title}
                subtitle={listing.subtitle}
                bed={listing.bedroomCount}
                guests={listing.guestCount}
                bathroom={listing.bathroomCount}
                bedroom={listing.bedroomCount}
            />
            <ListingFooter rating={listing.rating} price={listing.price} />
            <div className='absolute right-0'>
            <HeartButton />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Listing