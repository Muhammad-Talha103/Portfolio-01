import Image1 from '@/images/image1.png';
import Image2 from '@/images/image2.png';
import Image3 from '@/images/image3.png';
import Image from 'next/image';

interface DataItem {
  image: string;
  title: string;
  description: string;
}


const data = [
  {
    image: Image1.src,
    title: "Expertise in Frontend Development",
    description: "With a strong background in HTML, CSS, and JavaScript frameworks, including Next.js and Tailwind CSS."
  },
  {
    image: Image2.src,
    title: "Tailored Solutions",
    description: "I understand that every project is unique. I work closely with you to develop customized solutions that align with your specific goals and vision."
  },
  {
    image: Image3.src,
    title: "Focus on User Experience",
    description: "I prioritize creating intuitive interfaces that engage users and drive conversions, ensuring your website not only looks great but also performs well."
  }
];

const Item = ({ image, title, description }:DataItem) => (
  <div className='flex flex-col items-center px-10'>
    <Image src={image} alt={title} className='w-80 md:w-full h-60 mt-4'  width={500} height={500}/>
    <h1 className='text-center mt-10 font-semibold text-xl'>{title}</h1>
    <p className='text-center mt-1 text-[16px] text-gray-500'>{description}</p>
  </div>
);

const HomePageOutCome = () => {
  return (
    <div className='bg-gray-100 py-10'>
  <h1 className='text-3xl font-bold text-center uppercase'>Why Hire US?</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8  '>
      {data.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
    </div>
  );
}

export default HomePageOutCome;
