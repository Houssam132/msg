import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00d8df]'>Study.</h1>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-[#000300fa] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Study.</h1>
        <div className='space-x-64 '>
                        <span className='font-extrabold ml-2'>Contacts</span>
                        <span className='font-extrabold hover:text-sky-700'><a href='#'> Log out</a></span>
          </div>
          <div className='mt-4'>
            <li className='p-4 border-b  border-t border-gray-600 hover:text-sky-700'>Houssam Benayache</li>
            <li className='p-4 border-b border-gray-600 hover:text-sky-700'><a href='#'><img src='' alt=''></img> user</a></li>
            <li className='p-4 border-b border-gray-600 hover:text-sky-700'><a href='#'> <img src='' alt=''></img>user</a></li>
            <li className='p-4 border-b border-gray-600 hover:text-sky-700'><a href='#'><img src='' alt=''></img> user</a></li>
            <li className='p-4 border-b border-gray-600 hover:text-sky-700'><a href='#'><img src='' alt=''></img>user</a></li>
            <li className='p-4 border-b border-gray-600 hover:text-sky-700'><a href='#'> <img src='' alt=''></img>user</a></li>
            <li className='p-4 border-b border-gray-600 hover:text-sky-700'><a href='#'> <img src='' alt=''></img>user</a></li>
          </div>
      </ul>
    </div>
  );
};

export default Navbar;