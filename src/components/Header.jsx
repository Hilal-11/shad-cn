import React from 'react'
import { Button } from "@/components/ui/button"
function Header() {
  return (
    <div className='flex justify-evenly w-full h-full items-center'>
        <div className='rounded-md font-bold text-left text-white text-xl'>
            Webmastery.pro
        </div>
        <div className='flex gap-3'>
            <div className='text-white bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Components</h1>
            </div>
            <div className='text-white bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Documentation</h1>
            </div>
            <div className='text-white bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Projects</h1>
            </div>
            <div className='text-white bg-transparent hover:bg-white duration-500 rounded-full cursor-pointer hover:text-black font-medium px-10 py-2 hover:shadow-lg hover:shadow-black'>
                <h1>Landing Pages</h1>
            </div>
        </div>

        <div>
            <Button className='bg-white text-black px-8'>SignUp</Button>
        </div>
    </div>
  )
}

export default Header