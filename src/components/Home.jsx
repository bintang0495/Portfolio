import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Photo from '../assets/Pas Photo.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col  justify-center h-full ml-[170px] text-right'>
        <img
          className='hidden md:flex ml-auto'
          src={Photo}
          alt='Profile'
          style={{ borderRadius: '50%', width: '150px' }}
        />

        <h1 className='text-4xl sm:text-5xl text-[#ccd6f6]'>
          Bintang Muhamad Akbar
        </h1>
        <h2 className='text-2xl sm:text-4xl text-[#8892b0]'>
          I'm Web Developer
        </h2>
        <p className='text-[#8892b0] py-4 '>
          I have experience working as a technical consultant for 3 years.
          Currently focusing on becoming a web developer. This is my portfolio
          as a web developer
        </p>
        <div>
          <button className='text-white px-6 py-3 my-2 flex items-center justify-between ml-auto text-right hover:bg-green-500 border-2 hover:border-green-500'>
            View Work
            <span className='ml-3'>
              <HiArrowRight />{' '}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
