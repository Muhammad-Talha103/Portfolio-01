import React from 'react'
import Image from "next/image";
import mainImage from '@/images/mainImage.jpg';

const Photo = () => {
  return (
    <div >
            <Image 
              src={mainImage} 
              alt="Main Image" 
              width={300} 
              height={300} 
              className="rounded-full border-[2px]  shadow-lg maxmd:mr-14 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
  )
}

export default Photo