import React from 'react';
import Image from 'next/image';

const SaleBanner = () => {
  return (
    <div className='relative w-full'>
      <Image
        src='/cta-banner.png' 
        alt='Sale Banner'
        layout='responsive'
        width={1920} 
        height={600} 
        className='object-cover' 
      />
      <div className='absolute bottom-0 left-0 mb-40 ml-40'> 
        <button className='bg-orange-500 text-white py-3 px-6 text-xl rounded-lg font-bold'>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SaleBanner;
