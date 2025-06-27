import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id='services' className='w-full px-[22%] py-10 scroll-mt-20'>
        <motion.h4 
             initial={{y:20,opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:1, delay:0.3}}
        className='text-center mb-2 text-lg font-outfit'>- WHAT I DO</motion.h4>
        <motion.h2 
        initial={{y:20,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center text-5xl font-outfit'>Awesome Quality Services</motion.h2>

            <motion.p 
            initial={{opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:0.7, delay:0.7}}
            className='text-justify max-w-2xl mx-auto mt-5 mb-12 font-outfit font-normal text-[17px]'>
                👉🏼 I am a Frontend developer, UI UX Designer, Graphic Designer from Philippines, with 1 year of experience in Graphic Designing. 
                With a strong foundation in HTML, CSS, JavaScript, PHP, Python and modern frameworks, I develop seamless web applications that prioritize performance and accessibility.
            </motion.p>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.9}}
            className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index)=>(
                    <motion.div 
                    whileHover={{scale: 1.05}}
                    key={index}
                    className='border border-gray-400 rounded-b-lg px-8 py-12 hover:shadow-black cursor-pointer
                     hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                        <Image src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white font-robo font-semibold'>{title}</h3>
                        <p className='text-sm text-gray-700 leading-5 dark:text-white/80 text-justify font-outfit'>
                            {description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
    </motion.div>
  )
}

export default Services