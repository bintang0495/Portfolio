import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from '../assets/BA.png';

const Navbar = () => {
  const [isMd, setIsMd] = useState(false);
  const handleClick = () => setIsMd(!isMd);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50'>
      <div>
        <img src={Logo} alt='logo' style={{ width: '100px' }} />
      </div>
      <div>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className='md:hidden z-10 cursor-pointer' onClick={handleClick}>
        {isMd ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile */}
      <ul
        className={
          isMd
            ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            : 'hidden'
        }>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li
            className={
              isMd
                ? 'hidden'
                : 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'
            }>
            <a
              className='flex justify-between items-center w-full text-gray-300 font-bold'
              href='https://www.linkedin.com/in/bintang-muhamad-akbar-931630122/'
              target='_blank'
              rel='noreferrer'>
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className={
              isMd
                ? 'hidden'
                : 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'
            }>
            <a
              className='flex justify-between items-center w-full text-gray-300 font-bold'
              href='https://www.github.com/bintang0495'
              target='_blank'
              rel='noreferrer'>
              Github
              <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
