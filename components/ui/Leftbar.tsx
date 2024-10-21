'use client';

import { sidebarLinks } from '@/app/Sidebarlinks'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaHome } from 'react-icons/fa'

function Leftbar() {
    const pathname=usePathname();
    const router=useRouter()
  return (
    <section className='h-screen w-14 md:w-40 fixed bg-black-2'>
        <div className='w-full h-16 border-b-2 border-black-3 flex items-center justify-center mt-2 '>
           <Link href="/" className='flex items-center justify-center'>
            <img src="/pngwing.com.png" className='w-11 mr-1'  alt="" />
             <h2 className='font-extrabold hidden md:block'>MazCast</h2></Link>
        </div>
        <div className='pt-3 pb-3  md:p-3 flex gap-3 flex-col'>
            {sidebarLinks.map((e)=>{
                // console.log(e.route);
                
                const isActive=pathname===e.route||pathname.startsWith(`${e.route}/`) 
                return(
            <Link className={cn('w-full h-8 md:justify-start justify-center flex items-center md:ml-3  md:pl-4 mb-1',{'rounded-l-[5px] bg-black-3 border-r-4 border-[#C75B1E]':isActive})} href={e.route}>
            {e.icon}<span className='hidden md:block'>{e.Name}</span>
            </Link>)})}
        </div>
        <div></div>
    </section>
  )
}

export default Leftbar