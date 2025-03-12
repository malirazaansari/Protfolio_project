import React from 'react'
import ContactForm from './ContactForm'
import SectionHeading from '@/components/helper/SectionHeading'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 dark:bg-[#191D2B] bg-gray-200'>
        <SectionHeading>Contact Me</SectionHeading>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10">
        <div data-aos ="fade-left" data-aos-anchor-placement ="top-center" 
                     className="mt-20">
            <ContactForm/>
        </div>
        <div data-aos ="fade-right" data-aos-anchor-placement ="top-center" 
                    data-aos-delay= "100" className='xl:mx-auto'>
            <ContactInfo/>
        </div>
        </div>
    </div>
  )
}

export default Contact