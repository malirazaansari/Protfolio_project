'use client'
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type Props= {
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        project: string;
        image: string;
    }
}
const ReviewCard = ({review}:Props) => {
    const {name, rating, profession, project, image, review:clientReviews} = review
  return (
    <div className='dark:bg-[#131622] m-4 border border-blue-700 dark:border-none rounded-md overflow-hidden'>
        <div className="p-6">
            <Image src="/images/q.png" alt='image' width={50} height={50}/>
            <p className='text-gray-700 dark:text-white text-opacity-70'>{clientReviews}</p>
            <Image src="/images/q.png" alt='image' width={50} height={50} className='ml-auto'/>
        </div>
        <div className="flex items-center space-x-3 bg-indigo-900 mx-auto mb-3 px-6 py-3 rounded-full w-fit font-bold text-white">
            <span>{rating}/5</span>
            <FaStar className='text-yellow-500'/>
        </div>
        <div className="bg-gray-100">
            <div className="flex items-center space-x-6 p-6">
                <div>
                    <Image src={image} alt={name} width={40} height={40} className='rounded-full'/>
                </div>
                <div>
                    <h1 className='font-bold text-gray-700 text-lg'> {name}</h1>
                    <p className='text-gray-700 text-base'>{profession}</p>
                    <p className='text-gray-700 text-base'>{project}</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
