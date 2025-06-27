import React , {useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      try {
        const response = await fetch("https://formspree.io/f/xblykaoz", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          setResult("Email Submitted Successfully! ✅");
          event.target.reset();
        } else {
          const data = await response.json();
          setResult(data.error || "Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setResult("Network error. Please check your connection and try again.");
      }
    };

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='contactme' className='w-full md:px-[25%] xs:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

        <motion.h4 
        initial={{y: -20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.3, duration:0.5}}
        className='text-center mb-2 text-lg font-outfit'>Connect With Me!</motion.h4>
        <motion.h2 
        initial={{y: -20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.5}}
        className='text-center text-5xl font-outfit'>Get in Touch</motion.h2>
          
        <motion.form 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{delay:0.9, duration:0.5}}
         onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            {/* Fixed grid container with proper centering */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-6 mt-10 mb-8'>
                <motion.input 
                 initial={{x: -50, opacity:0}}
                 whileInView={{x:0, opacity:1}}
                 transition={{delay:1.1, duration:0.6}}
                type='text' placeholder='Enter your name' required className='flex-1 w-full p-4 outline-none font-outfit border-[0.10px]
                 border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 dark:border-[0.5px]' name='name'/>

                <motion.input 
                 initial={{x: 50, opacity:0}}
                 whileInView={{x:0, opacity:1}}
                 transition={{delay:1.2, duration:0.6}}
                type='email' placeholder='Enter your email' required className='flex-1 w-full p-4 outline-none font-outfit border-[0.10px] 
                 border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90 dark:border-[0.5px]' name='email' />
            </div>
            <motion.textarea 
            initial={{y: 100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:1.3, duration:0.6}}
            rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.10px] font-outfit 
             border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>

            <motion.button 
            whileHover={{scale: 1.05}}
            transition={{duration: 0.8}}
            type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 font-outfit
             text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
            >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /> </motion.button>

            <p className='mt-4 text-center'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact