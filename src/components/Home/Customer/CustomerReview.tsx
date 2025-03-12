import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import Slider from './Slider'


const CustomerReview = () => {
  return (
    <div className='pt-16 pb-16 dark:bg-[#191D2B] bg-gray-200'>
        <SectionHeading>Customer Reviews</SectionHeading>
        <div className="w-[90%] sm:w-[80%] mx-auto mt-20  ">
            <Slider />
        </div>
    </div>
  )
}

export default CustomerReview