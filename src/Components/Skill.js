import React from 'react'
import python from './python.png'
import django from './django-logo.png'
import sql from './sql-server.png'
import cpp from './c++.png'
import html from './html.png'
import css from './css.png'
// import react from './reactjs.png'

const Skill = () => {
  return (
    <div className='border-t-2  border-gray-400 bg-[#3C3C3C] text-gray-400 md:h-[190px] max-w-[1200px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md: items-center '>  
          
      <h2 className=" text-white-700 text-2xl md:text-4xl font-bold m-4">
              My <br /> Tech <br /> Skills
          </h2>
          
          <div className="f1ex flex-col Items-center m-4 sm:my-0 text-center w-[80px] md:w-[100px]">
              <img src={python} alt="" />
              <p className="mt-2">Python</p>
             </div>
          <div className="f1ex flex-col Items-center m-4 text-center sm:my-0 w-[80px] md:w-[100px]">
              <img src={django} alt="" />
              <p className="mt-2">Django</p>
             </div>
          <div className="f1ex flex-col Items-center m-4 text-center sm:my-0 w-[80px] md:w-[114px]">
              <img src={sql} alt="" />
              <p className="mt-2">My SQL</p>
             </div>
          <div className="f1ex flex-col Items-center m-4 text-center sm:my-0 w-[80px] md:w-[114px]">
              <img className='pt-5' src={cpp} alt="" />
              <p className="mt-10 mb-4 ">C++</p>
             </div>
          <div className="f1ex flex-col Items-center m-4 text-center sm:my-0 w-[80px] md:w-[114px]">
              <img src={html} alt="" />
              <p className="mt-2">HTML</p>
             </div>
          <div className="f1ex flex-col Items-center m-4 text-center sm:my-0 w-[80px] md:w-[114px]">
              <img src={css} alt="" />
              <p className="mt-2">CSS</p>
             </div>
             

    </div>
  )
}

export default Skill
