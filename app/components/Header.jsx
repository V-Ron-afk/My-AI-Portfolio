import { assets } from '@/assets/assets'
import Image from 'next/image'
import {React, useState} from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import { AuroraBackground } from './AuroraBackground';
import Modal2 from "./ui/modal2";
import { X } from "react-feather";


const Header = ({ isDarkMode }) => {

  const [open1, setOpen1, ] = useState(false)
  
  return (
  <>
    <div id='home' className='relative w-full h-screen'>
      
      {/* Spline Background */}
      <AuroraBackground className='absolute inset-0 ' showRadialGradient= {false} />

      {/* Content Overlay */}
        
      <div className='relative z-10 w-11/12 max-w-3xl mx-auto h-full flex flex-col items-center justify-center gap-1'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        > 
          <Image 
            src={assets.profile_img} 
            alt='' 
            className='rounded-full w-52' 
          />
        </motion.div>
        
        <motion.h3 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex items-end gap-2 text-xl md:text-2xl mb-1 font-mono'
        >
          Hi! I'm Ron Oblepias <Image src={assets.hand_icon} alt='' className='w-6'/> 
        </motion.h3>

        <TypeAnimation
          sequence={[
            'Frontend Developer',
            2000,
            'UI/UX Designer',
            2000,
            'Graphic Designer',
            2000,
          ]}
          speed={10}
          className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'
          repeat={Infinity}
        />
          
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='max-w-2xl mx-auto font-outfit font-normal mt-4 text-center text-sm sm:text-lg md:text-lg lg-text-xl'
        >
          As a Frontend Developer, UI/UX Designer, and Graphic Designer, <br/>
          I blend creativity with technical expertise to build responsive, 
          intuitive, and aesthetically pleasing interfaces.💻
        </motion.p>

          {/* MODAL BUTTON */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.button 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05,
            transition: {
              duration: 0.2,
              ease: "easeInOut"
            }
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            ease: "easeInOut"
          }}
          onClick={() => setOpen1(true)}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-black font-outfit hover:border-gray-400 dark:hover:border-gray-600"
        >
          connect with me 
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.div>
        </motion.button>
          
             {/* MODAL HEADER */}
                 <Modal2 
                      open={open1} 
                      onClose={() => setOpen1(false)}
                  >
                    <div className="relative w-[90%] max-w-xl mx-auto mt-32 p-6 rounded-2xl shadow-xl text-center bg-white dark:bg-zinc-950">

                      {/* Close Button INSIDE CONTENT */}
                      <button
                        onClick={() => setOpen1(false)}
                        className="absolute top-4 right-4 p-2 rounded-lg text-gray-500 bg-white/80 hover:bg-gray-100 transition backdrop-blur-sm"
                      >
                        <X size={20} />
                      </button>

                          {/* Floating Avatar */}
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 md:-top-40 lg:-top-40 xs:-top-28"> {/* Increased negative top */}
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                              <Image
                                src={assets.modalprofile}
                                alt="Avatar"
                                width={1000}
                                height={1000}
                                className="rounded-full hover:scale-105 transition-transform"
                              />
                            </motion.div>
                          </div>

                      {/* Modal Content */}
                        <div className="md:mt-14 xs:mt-16 sm:mt-16">
                          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-extrabold font-sans md:text-5xl xs:text-4xl">
                            Connect with me!
                          </h2>
                          <p className="mt-2 font-outfit text-sm"> 🌟Whether you're seeking a passionate collaborator for your next big idea, exploring talent for your team, or simply want to discuss the intersection of tech and creativity. I'm all ears and code!📬💻</p>

                        {/* Linkable Buttons in 3 Columns */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            <a
                              href="mailto:oblepiasn29@gmail.com?subject=&body=I wanted to reach out about..." // Replace with your email link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium font-sans rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-150 dark:text-black dark:bg-zinc-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            >
                              <Image
                                src={assets.gmail} // Replace with the path to your email icon
                                alt="Email"
                                width={20}
                                height={20}
                                className="inline-block"
                              />
                              Email   
                            </a>

                            <a
                              href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium font-sans rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-150 dark:text-black dark:bg-zinc-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            >
                              <Image
                                src={assets.linked} // Replace with the path to your LinkedIn icon
                                alt="LinkedIn"
                                width={20}
                                height={20}
                                className="inline-block"
                              />
                              LinkedIn
                            </a>
                            <a
                              href="https://github.com/V-Ron-afk" // Replace with your GitHub link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium font-sans rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-150 dark:text-black dark:bg-zinc-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            >
                              <Image
                                src={isDarkMode ? assets.github : assets.githubwhite} // Replace with the path to your GitHub icon
                                alt="GitHub"
                                width={20}
                                height={20}
                                className="inline-block"
                              />
                              GitHub
                            </a>
                          </div>

                        </div>
                      </div>
                  </Modal2>
        
          <motion.a 
            initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05,
            transition: {
              duration: 0.2,
              ease: "easeInOut"
            }
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            ease: "easeInOut"
          }}
            href="/NRO_Resume.pdf" 
            download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black font-outfit'
          >
            my resume <Image src={assets.download_icon} alt='' className='w-4' />
          </motion.a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header