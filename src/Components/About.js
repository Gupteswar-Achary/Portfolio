import React from 'react'
import images from './mypic.jpg'
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
      <div className='text-white max-w-[1200px] mx-auto' id="about">
        <div className="md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0 text-left flex  ">
            <div className="my-auto mx-6">

              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r text-transparent from-blue-300 to-green-900 bg-clip-text">About me</h2>
              <p className='text-base font-sans  lg:text-lg'>
                Detail-oriented and highly motivated Python and Django Developer with a
                strong foundation in web development, database management, and SQL.
                Proven ability to leverage technical skills and expertise in Django, Python,
                HTML, and, CSS to create robust web applications and optimize database
                performance using SQL. Eager to contribute to a dynamic team and grow
                professionally in a challenging environment.            
              </p>
            </div>
          </div>
          <img className='mx-auto rounded-2xl py-8 md:py-0' src={images} width={300} height={300} alt="" />
        </div>

      </div>
    </ScrollReveal>
  )
}

export default About
