
import Container from '@/shared/Container';
import React from 'react';
import {educationList} from './Helpers';
const Education = () => {
 
  return (
    <Container className="bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center py-1 uppercase">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, index) => (
            <div key={index} className="p-6 bg-gray-100 shadow-md rounded-md transition-transform transform hover:scale-105 duration-500">
              <h3 className="text-xl font-bold text-gray-800 uppercase">{edu.degree}</h3>
              <p className="text-gray-600 font-semibold py-2">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
              <p className="text-gray-500">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Education;
