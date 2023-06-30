'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/Ai'
import {AiOutlineCloseCircle} from 'react-icons/Ai'
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/Ai'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <div className='fixed bg-white top-0 w-[100%] z-20 shadow-md'>
        <div className='container mx-auto flex justify-between items-center px-4 py-4'>
            <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
                <span className='italic text-gray-950'>Next</span>
                <span className='italix text-purple-700'>Web</span>
            </div>            
            <div className='hidden md:flex gap-10 tracking-wider text-gray-600'>
              <Link className='hover text-purple-700' href="/">Home</Link>
              <Link className='hover text-purple-700' href="#aplicacion">Apps</Link>
              <Link className='hover text-purple-700' href="#categorie">Categories</Link>
              <Link className='hover text-purple-700' href="/">Services</Link>
            </div>
            {toggle ? (
                <AiOutlineCloseCircle onClick={()=>setToggle(!toggle)} size={30} className='md:hidden block text-gray-600'/>
            ):(
                <AiOutlineMenu onClick={()=>setToggle(!toggle)} size={30} className='text-gray-600 md:hidden block'/>
            )}
        </div>
          {/*Responsive menu*/}
          <div className={`md:hidden flex flex-col w-[70%] h-screen fixed bg-black text-white top-[60px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>      
              <Link className='hover text-purple-700 p-5' href="/">Home</Link>
              <Link className='hover text-purple-700 p-5' href="/">Apps</Link>
              <Link className='hover text-purple-700 p-5' href="/">Categories</Link>
              <Link className='hover text-purple-700 p-5' href="/">Services</Link>
              
              <div className='flex flex-col gap-5 items-center mt-48'>
            <div className='bg-purple-600 w-[150px] h-[1px]'></div>
            <div className='flex gap-5'>
              <Link legacyBehavior href="https://github.com/Jonsym">
                <a target="_blank"><AiFillGithub size={35} className='text-purple-600 hover:translate-y-1.5 duration-300'/>
                <div></div>
                </a>
              </Link>
              <Link legacyBehavior href="https://twitter.com/JonsymZ">
                <a target="_blank"><AiFillTwitterCircle size={35} className='text-purple-600 hover:translate-y-1.5 duration-300'/>
                <div></div>
                </a>
              </Link>
              <Link legacyBehavior href="https://www.linkedin.com/in/jonathan-zamudio-184027281/">
                <a target="_blank"><AiFillLinkedin size={35} className='text-purple-600 hover:translate-y-1.5 duration-300'/>
                <div></div>
                </a>
              </Link>
            </div>
        </div>
          </div>
    </div>
  )
}

export default Navbar