import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import GITHUB from '../assets/github.png';
import R_ICON from '../assets/react.png';
import JAVASCRIPT from '../assets/javascript.png';
import MONGO from '../assets/mongo.png';
import NODE from '../assets/node.png';
import REDUX from '../assets/react-redux.png';
import JAVA from '../assets/JAVA.png';

const Skills = () => {
  return (
    <div className='bg-[#0a192f] text-gray-300' name='skills'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl py-4 font-bold inline border-b-4 border-green-500 '>
            Skills
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-12'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt='HTML icon' className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt='CSS icon' className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              src={JAVASCRIPT}
              alt='JAVASCRIPT icon'
              className='w-20 mx-auto'
            />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={GITHUB} alt='GITHUB icon' className='w-20 mx-auto' />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={MONGO} alt='MONGO icon' className='w-20 mx-auto' />
            <p className='my-4'>MONGO</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={NODE} alt='NODE icon' className='w-20 mx-auto' />
            <p className='my-4'>NODE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={R_ICON} alt='REACT icon' className='w-20 mx-auto' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={REDUX} alt='REDUX icon' className='w-20 mx-auto' />
            <p className='my-4'>REDUX</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={JAVA} alt='JAVA icon' className='w-20 mx-auto' />
            <p className='my-4'>JAVA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
