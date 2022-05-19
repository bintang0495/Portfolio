import React from 'react';

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300' name='about'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-500'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hello, I'm Bintang, nice to see you.</p>
          </div>
          <div>
            <p>
              I'm passionate about learning a new thing, able to learn new
              technology, and can collaborate and communicate a thing with other
              people. Now I'm focusing on build a responsive website but
              familiar with back-end too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
