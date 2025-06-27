import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[22%] py-10 scroll-mt-10'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
        <motion.h4 
         initial={{opacity:0, y: -20}}
         whileInView={{opacity:1, y: 0}}
         transition={{duration:0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-outfit'
        >Introduction</motion.h4>

        <motion.h2 
         initial={{opacity:0, y: -20}}
         whileInView={{opacity:1, y: 0}}
         transition={{duration:0.5, delay: 0.5}}
        className='text-center text-5xl font-outfit section' >Learn About Me!</motion.h2>

      <motion.div 
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.8}}
      className='flex w-full flex-col lg:flex-row md:flex-row items-justify gap-12 lg:my-8 md:my-8 xs:my-8 '>
        <motion.div
         initial={{opacity:0, scale:0.9}}
         whileInView={{opacity:1, scale:1}}
         transition={{duration:0.6}}
         className='flex-shrink-0 md:w-90 sm:w-80 md:mb-20 xs:-mb-11 lg:mb-25'>
          <Image src={assets.user_image} alt='user' className='rounded-3xl min-w-60 '/>
        </motion.div>

          <motion.div 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.6, delay: 0.8}}
          className='flex-1'>
            <p className='mb-10 max-w-2xl font-outfit font-normal text-[16px] text-justify md:text-[16px] sm:text-[15px] xs:text-[14px] text-gray-800 dark:text-white/80 leading-relaxed hyphens-auto'>
            🎨 Hi there! I'm Naven Ron P. Oblepias, a creative technologist with a flair for turning ideas into visually striking and user-friendly digital experiences!
            <br/>👉🏼My Front-end Web Developing & UI/UX design skills enable me to create engaging user flows, wireframes, and prototypes, ensuring an optimal balance between functionality and aesthetics. Additionally, 
              my background in Graphic Design allows me to produce compelling visuals, branding materials, and marketing assets that leave a lasting impression.  </p>

            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 sm:gap-3 max-w-2xl mx-auto px-4'>
                {infoList.map(({ icon, iconDark, title, description }, index) => (
                  <motion.li 
                    whileHover={{ scale: 1.05 }}
                    className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-amber-100  
                    hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white 
                    dark:hover:bg-darkHover/30 w-full min-w-0' // Added min-w-0 to prevent overflow
                    key={index}>
                    <Image 
                      src={isDarkMode ? iconDark : icon} 
                      alt={title} 
                      className='w-6 sm:w-7 mt-2 sm:mt-3' // Responsive icon size
                    />
                    <h3 className='my-3 sm:my-4 font-semibold text-gray-700 dark:text-white 
                      text-base md:text-[13px] sm:text-lg leading-tight break-words'> {/* Added line clamping */}
                      {title}
                    </h3>
                    <p className='text-gray-600 text-xs lg:text-[12px] md:text-[10px] sm:text-sm dark:text-white/80 
                      leading-relaxed hyphens-auto'> {/* Improved line breaks */}
                      {description}
                    </p>
            </motion.li>
          ))}
           </motion.ul>

              <motion.h4 
                initial={{ y: 20, opacity:0}}
                whileInView={{ y: 0, opacity:1}}
                transition={{duration:0.5, delay: 1.3}}
              className='my-6 text-gray-800 font-outfit text-xl dark:text-white/80'> Tool i use</motion.h4>  
              <motion.ul 
                initial={{opacity:0, }}
                whileInView={{opacity:1}}
                transition={{duration:0.6, delay: 1.5}}
              className='flex items-center gap-3 sm:gap-5'> 
                  {toolsData.map((tool, index)=>(
                    <motion.li 
                    whileHover={{scale:1.1}}
                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                    key={index}>
                      <Image src={tool} alt='Tool' className='w-5 sm-w-7' />
                    </motion.li>
                  ))}
              </motion.ul>
          </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About