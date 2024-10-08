import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMenuOutline } from 'react-icons/io5';

const MobNavbar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 shadow-md'>
      <div className='flex justify-between items-center py-2'>
        <div className='text-2xl'>
          <IoMenuOutline />
        </div>
        <div className='relative'>
          <HiOutlineShoppingBag className='text-2xl' />
          <div className='absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
            3 {/* Change this number to display the number of items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;
