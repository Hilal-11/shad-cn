import React from 'react'
import { Button } from "@/components/ui/button"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import { TbMenu } from "react-icons/tb";
function Header() {
  return (
    <div className='flex justify-between w-full h-full items-center overflow-hidden'>
        <div className='rounded-md font-bold text-left  text-lg lg:text-2xl '>
            Webmastery.pro
        </div>
        <div className='hidden lg:flex gap-0'>
            <div className=' bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Components</h1>
            </div>
            <div className=' bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Documentation</h1>
            </div>
            <div className=' bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Projects</h1>
            </div>
            <div className=' bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Landing Pages</h1>
            </div>
        </div>

        <div className='hidden lg:flex'>
            <Button className='bg-white text-black lg:px-8  text-sm rounded-full'>SignUp</Button>
        </div>
        {/* mobile enu */}
        <div className='lg:hidden  text-3xl'>
            {/* <HiOutlineMenuAlt3 /> */}
            {/* <CgMenuRight /> */}
            <TbMenu />
        </div>
    </div>
  )
}

export default Header