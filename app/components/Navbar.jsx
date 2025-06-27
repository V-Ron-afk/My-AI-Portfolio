import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)

  const sideMenuRef = useRef();
  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY > 50){
          setIsScroll(true)
        }else{
          setIsScroll(false)
        }
      })
  },[])

  return (
    <>
        <nav className={`w-full fixed px-10 lg:px-10 xl:px-[10%] py-4 flex items-center justify-between z-50 
           ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20":""}`}>
          <a href= "#top">
              <Image src={isDarkMode ? assets.mylogodark : assets.mylogo} alt="" className='w-28
              cursor-pointer mr-14'/>
          </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${isScroll ? "" : "bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark-bg:transparent "}`}>
            <li> <a className='font-outfit   hover:bg-transparent hover:rounded-sm 
                    duration-150 hover:shadow-black dark:border-white dark:hover:shadow-white ' href="#home"> Home </a></li>
            <li> <a className='font-outfit   hover:bg-transparent hover:rounded-sm 
                    duration-150 hover:shadow-black dark:border-white dark:hover:shadow-white' href="#about"> About Me </a></li>
            <li> <a className='font-outfit   hover:bg-transparent hover:rounded-sm 
                    duration-150 hover:shadow-black dark:border-white dark:hover:shadow-white' href="#services"> Services </a></li>
            <li> <a className='font-outfit   hover:bg-transparent hover:rounded-sm 
                    duration-150 hover:shadow-black dark:border-white dark:hover:shadow-white' href="#mywork"> My work </a></li>
            <li> <a className='font-outfit   hover:bg-transparent hover:rounded-sm 
                    duration-150 hover:shadow-black dark:border-white dark:hover:shadow-white' href="#contactme"> Contact me </a></li>
        </ul>

        <div className='flex items-center gap-4 ml-20'>
        <button onClick={()=> setIsDarkMode (prev => !prev)}>
          <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-8'/>
        </button>

        <button className='block md:hidden ml-3' onClick={openMenu}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
        </button>

        <ul
              ref={sideMenuRef}
              className="flex md:hidden flex-col gap-4 py-20 px-6 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
                bg-slate-50 transition duration-500 dark:bg-darkHover dark:text-white"
            >
              <div className="absolute right-6 top-6" onClick={closeMenu}>
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt=""
                  className="w-5 cursor-pointer"
                />
              </div>

              {[
                { label: "☝🏻Home", href: "#home" },
                { label: "👨🏻‍💻About Me", href: "#about" },
                { label: "⚙️Services", href: "#services" },
                { label: "💻My work", href: "#mywork" },
                { label: "📬Contact me", href: "#contactme" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="font-outfit ml-2 py-2 px-4 rounded-md transition-colors duration-300 
                      hover:bg-slate-500 hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            </div>
    </nav>
    </>
  )
}

export default Navbar

