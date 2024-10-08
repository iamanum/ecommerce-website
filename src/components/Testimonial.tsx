import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className='container pt-16 pb-16'>
      <h2 className='font-medium text-2xl pb-4'>Testimonials</h2>
      <div className='grid lg:grid-cols-3 gap-6'>
       
        {/* Testimonial Item 1 */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center'>
          <Image
            className='rounded-full mb-2' 
            src='/user.jpg.png' 
            width={100} 
            height={100} 
            alt='User Image'
          />
          <p className='text-gray-500 mb-2 text-center'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor."
          </p>
          <h3 className='font-bold text-blue-600'>Janee Doe</h3> 
        </div>

        {/* Testimonial Item 2 */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center'>
          <Image
            className='rounded-full mb-2' 
            src='/user2.jpg' 
            width={100} 
            height={100} 
            alt='User Image'
          />
          <p className='text-gray-500 mb-2 text-center'>
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          </p>
          <h3 className='font-bold text-blue-600'>Jon Smith</h3> 
        </div>

        {/* Testimonial Item 3 */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center'>
          <Image
            className='rounded-full mb-2' 
            src='/user3.jpg' 
            width={100} 
            height={100} 
            alt='User Image'
          />
          <p className='text-gray-500 mb-2 text-center'>
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
          </p>
          <h3 className='font-bold text-blue-600'>Alice Johnson</h3> 
        </div>
      </div>
    </div>
  );
};

export default Testimonial;