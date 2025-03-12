import React ,{ReactNode} from 'react'


type Props = {
    children :ReactNode;
};

const SectionHeading = ({children} : Props) => {
  return (
    <h1 className='  w-fit text-center px-4 py-3 mx-auto dark:text-white text-gray-700 text-3xl sm:text-4xl 
    md:text-5xl uppercase '>
      {children}
    </h1>
  )
}

export default SectionHeading