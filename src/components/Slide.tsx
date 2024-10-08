import React from 'react';
import Image from 'next/image'; // Ensure to import Image from next/image

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-none border-none relative'>
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] 
      -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0
      rounded-lg sm:rounded-none">
        <h3 className='text-accent text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>
            {mainTitle}
        </h2>
        <h3 className='text-[28px] md:text-[32px] lg:text-[36px] text-royal-blue'> 
            starting at {""}
            <b className="text-[24px] md:text-[28px] lg:text-[32px] text-royal-blue">{price}</b>
            .00
        </h3>
        <div className='bg-red-600 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg
        inline-block cursor-pointer hover:bg-red-700'> 
            Shop Now
        </div>
      </div>

      <Image className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right
      md:object-left-bottom"
      src={img}
      alt="banner"
      width={2000}
      height={2000}
      />
    </div>
  );
}

export default Slide;