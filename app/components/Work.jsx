import { assets, workData, workData2, workData3, workData4, workData5, workData6, workData7, workData8 } from '@/assets/assets'
import {React, useState} from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import Modal from "./ui/modal"

const Work = ({isDarkMode}) => {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)
  const [open8, setOpen8] = useState(false)

  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='mywork' className='w-full px-[22%] py-10 scroll-mt-20'>
        <motion.h4
          initial={{y: -20, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{delay:0.3, duration:0.5}}
        className='text-center mb-2 text-lg font-outfit'>- My Portfolio</motion.h4>

        <motion.h2 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.5, duration:0.5}}
        className='text-center text-5xl font-outfit'>My Excellent Portfolio</motion.h2>

      {/* MODAL ON CLICK */}
        <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {/* PORTFOLIO 1 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen1(true)}
        className=''>
            {workData.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage1})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold text-sm'>{project.title1}</h2>
                        <p className='text-sm text-gray-700'>{project.description1}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div>
        {/* PORTFOLIO 2 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen2(true)}>
            {workData2.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage2})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold text-sm'>{project.title2}</h2>
                        <p className='text-sm text-gray-700'>{project.description2}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div>

        {/* PORTFOLIO 3 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen3(true)}>
            {workData3.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage3})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title3}</h2>
                        <p className='text-sm text-gray-700'>{project.description3}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div>

        {/* PORTFOLIO 4 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen4(true)}>
            {workData4.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage4})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title4}</h2>
                        <p className='text-sm text-gray-700'>{project.description4}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div> 

        {/* PORTFOLIO 5 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen5(true)}>
            {workData5.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage5})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title5}</h2>
                        <p className='text-sm text-gray-700'>{project.description5}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div> 

        {/* PORTFOLIO 6 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen6(true)}>
            {workData6.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage6})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title6}</h2>
                        <p className='text-sm text-gray-700'>{project.description6}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div> 

        {/* PORTFOLIO 7 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen7(true)}>
            {workData7.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage7})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title7}</h2>
                        <p className='text-sm text-gray-700'>{project.description7}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div> 

        {/* PORTFOLIO 8 */}  
        <motion.div 
         initial={{y: -20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         onClick={() => setOpen8(true)}>
            {workData8.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index} className='aspect aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ' style={{backgroundImage: `url(${project.bgImage8})`}}>
                    
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title8}</h2>
                        <p className='text-sm text-gray-700'>{project.description8}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                </motion.div>
                ))}
        </motion.div> 
      </div>

     {/* MODAL DETAILS 1 */} 
     <Modal 
            open={open1} 
            onClose={() => setOpen1(false)}
            images={['/user1.png', '/user2.png', '/user3.png', '/user4.png', '/user5.png', '/user6.png', '/user7.png', '/user8.png', '/user9.png', '/user10.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold font-sans *:mb-2">LILIW TOURISM SCHEDULING SYSTEM IN LILIW LAGUNA <br/>CAPSTONE PROJECT</h3>
              <p className="text-gray-600 mb-2 font-sans text-justify  dark:text-white indent-8"> Website System where it can manage Tourist, Preview Tour Package Promotions, Previewing of Tourist Spots, and manages Tourist Scheduling.</p>
              <p className="text-gray-600 mb-4 font-sans text-justify  dark:text-white font-bold"> Tools and Technology  
                <Image src={assets.right_arrow_bold} // Replace with the path to your GitHub icon
                            alt="GitHub"
                            width={20}
                            height={20}
                            className="inline-block ml-1"
                        /> PHP, JavaScript, CSS, SCSS  </p>

             {/* Centered and Linkable Button */}
             <div className="flex justify-center mt-4">
                <a
                    href="https://github.com/V-Ron-afk/LILIW-TOURISM-SCHEDULING-SYSTEM" // Replace with your GitHub repository link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-150 dark:bg-zinc-100 dark:text-black dark:hover:bg-gray-400 dark:hover:text-white"
                >
                    <Image
                    src={isDarkMode ? assets.github : assets.githubwhite} // Replace with the path to your GitHub icon
                    alt="GitHub"
                    width={20} // Reduced icon size
                    height={20}
                    className="inline-block"
                    />
                    Source Code
                </a>
                </div>
            </div>  
        </Modal>

        {/* MODAL DETAILS 2 */} 
        <Modal 
            open={open2} 
            onClose={() => setOpen2(false)}
            images={['/userbike1.png', '/userbike2.png', '/userbike3.png', '/userbike4.png', '/userbike5.png', '/userbike6.png', '/userbike7.png', '/userbike8.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold font-sans *:mb-2">JJRLN BIKE SHOP - A ECOMMERCE BIKE SHOP </h3>
              <p className="text-gray-600 mb-2 font-sans text-justify indent-8 dark:text-white"> A Bike Shop E-commerce website has been develop to provide a convenient, accessible, and efficient platform for selling bicycles, cycling accessories, and related services to a wide audience.</p>
              <p className="text-gray-600 mb-4 font-sans text-justify  dark:text-white font-bold"> Tools and Technology  
                <Image src={assets.right_arrow_bold} // Replace with the path to your GitHub icon
                            alt="GitHub"
                            width={20}
                            height={20}
                            className="inline-block ml-1"
                        /> PHP, JavaScript, CSS, Bootstrap</p>

             {/* Centered and Linkable Button */}
             <div className="flex justify-center mt-4">
                <a
                    href="https://github.com/V-Ron-afk/JJRLN-E-Commerce-Bike-Shop" // Replace with your GitHub repository link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-150 transition-all dark:bg-zinc-100 dark:text-black dark:hover:bg-gray-400 dark:hover:text-white"
                >
                    <Image
                    src={isDarkMode ? assets.github : assets.githubwhite} // Replace with the path to your GitHub icon
                    alt="GitHub"
                    width={20} // Reduced icon size
                    height={20}
                    className="inline-block"
                    />
                    Source Code
                </a>
                </div>
            </div>  
        </Modal>

        {/* MODAL DETAILS 3 */} 
        <Modal 
            open={open3} 
            onClose={() => setOpen3(false)}
            images={['/meraki3.png', '/meraki1.png', '/meraki2.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">MERAKI LOGO</h3>
              <p className="text-gray-600 mb-2 font-sans text-justify indent-8 dark:text-white">For Meraki The Coffee Bar, I created a logo that's bold, fun, and full of personality just like the coffee experience they offer. The custom, curly lettering of "Meraki" brings a playful, vintage vibe, while the bright pink color instantly grabs attention and creates a lively, welcoming feel. </p>
              <p className="text-gray-600 font-sans text-justify indent-7 dark:text-white"> Since the logo was designed specifically for direct printing on cups, signage, and merchandise, I made sure the shapes are strong and clean, ensuring it stays vibrant and easy to recognize across different surfaces. </p>
            </div>
        </Modal>

        {/* MODAL DETAILS 4 */} 
        <Modal 
            open={open4} 
            onClose={() => setOpen4(false)}
            images={['/bebelynlogo1.png', '/bebelynlogo2.png', '/bebelynlogo3.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">BEBELYN'S LOGO</h3>
              <p className="text-gray-600 mb-2 font-sans text-justify indent-8 dark:text-white">For Bebelyn’s Halo-Halo, I wanted to create a logo that's as vibrant, sweet, and joyful as the famous Filipino dessert itself! The playful, handwritten style of "Bebelyn’s" gives the brand a warm and welcoming personality. </p>
              <p className="text-gray-600 font-sans text-justify indent-7 dark:text-white">Designed specifically for direct printing on cups, signage, and promotional materials, the logo stays bold and lively, even against colorful and frosty backgrounds. </p>
            </div>
        </Modal>

        {/* MODAL DETAILS 5 */} 
        <Modal 
            open={open5} 
            onClose={() => setOpen5(false)}
            images={['/lemonhauz1.png', '/lemonhauz2.png', '/lemonhauz3.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">LEMON HAUZ LOGO</h3>
              <p className="text-gray-600 mb-1 font-sans text-justify indent-8 dark:text-white">For Lemon Hauz Logo, a fresh and vibrant lemonade drink brand, I created a logo that’s as refreshing and lively as their products. The playful, rounded typography gives the brand a friendly and approachable personality, while the bold green color was carefully chosen to represent freshness, health, and nature. </p>
              <p className="text-gray-600 font-sans text-justify indent-7 dark:text-white">Since the logo was designed for direct printing on cups and other materials, I made sure the shapes were clean, bold, and easy to reproduce without losing clarity. The solid, eye-catching style ensures it stands out beautifully against the bright yellow lemonade inside the cup, creating a refreshing visual experience that perfectly matches the product.</p>
            </div>
        </Modal>

        {/* MODAL DETAILS 6 */} 
        <Modal 
            open={open6} 
            onClose={() => setOpen6(false)}
            images={['/crofflebar1.png', '/crofflebar2.png',]}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2"> CROFFLE BAR LOGO </h3>
              <p className="text-gray-600 mb-2 font-sans text-justify indent-8 dark:text-white">The Croffle Bar logo was crafted to perfectly blend the cozy charm of coffee culture with the fun, trendy twist of croissant-waffle treats! I designed the logo with a clean, modern font to make it easy to read and super stylish, while the croissant illustration tucked underneath adds a playful and mouthwatering hint of what Croffle Bar is all about. </p>
              <p className="text-gray-600 font-sans text-justify indent-7 dark:text-white">The bold, dark color choice ensures it prints beautifully and stands out clearly on cups, packaging, and signage — making it ideal for direct printing. </p>
            </div>
        </Modal>

        {/* MODAL DETAILS 7 */} 
        <Modal 
            open={open7} 
            onClose={() => setOpen7(false)}
            images={['/pitsburger3.png', '/pitsburger2.png', '/pitsburger1.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">PITS BURGER LOGO</h3>
              <p className= "text-gray-600 mb-2 font-sans text-justify indent-8 dark:text-white">For PITS BURGER, I created a bold and playful logo that captures the fun, easygoing vibe of the restaurant. The chunky, wavy letters in "PITS" give off a retro, welcoming feel, designed to grab attention and make customers smile. I chose a vibrant orange to spark energy and appetite — perfect for a place that serves delicious, feel-good food. The word "BURGER" underneath uses a softer, rounded font to keep everything clean, friendly, and easy to read. </p>
              <p className= "text-gray-600 font-sans text-justify indent-7 dark:text-white">Since this logo was made for direct printing, I focused on keeping the shapes simple and strong to ensure it looks great on everything from signs and menus to packaging. </p>
            </div>
        </Modal>

        {/* MODAL DETAILS 8 */} 
        <Modal 
            open={open8} 
            onClose={() => setOpen8(false)}
            images={['/coffeeG3.png', '/coffeeG2.png', '/coffeeG1.png']}
        >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">COFFEE G CAFE LOGO</h3>
              <p className="text-gray-600 mb-2 font-sans text-justify indent-8 dark:text-white">For Coffee G Café, a cozy and stylish coffee shop, I designed a logo that feels simple, elegant, and welcoming just like a great cup of coffee. The handwritten "g" at the center brings a personal and relaxed touch, making the brand feel approachable and authentic. </p>
              <p className="text-gray-600 font-sans text-justify indent-8 dark:text-white">The clean, modern font used for "COFFEE G" and "CAFÉ" balances the logo with a sophisticated look, making it versatile for direct printing on cups, packaging, signage, and more. </p>
            </div>
        </Modal>
        
        
    </motion.div>
    </>
  )
}

export default Work