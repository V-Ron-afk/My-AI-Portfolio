import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.mylogodark : assets.mylogo} alt='' className='w-36 mx-auto mb-2'/>
                <div className='w-max flex items-center gap-2 mx-auto font-outfit'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                        oblepiasn29@gmail.com
                </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 font-outfit'>
            <p>© 2025 Naven Ron Oblepias. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-outfit'>
                <li><a target='_blank' href="https://github.com/V-Ron-afk"> Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/naven-oblepias-/"> LinkedIn</a></li>
                <li><a target='_blank' href="https://www.facebook.com/Veeeenn/"> Facebook</a></li>
            </ul>

        </div>
    </div>
  )
}

export default Footer