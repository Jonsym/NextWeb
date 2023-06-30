'use client'
import Link from 'next/link';
import React from 'react'
import Button from './Button'
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/Ai'



const Hero = () => {
  return (
    <div className='bg-[url("/bbc.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='container mx-auto px-4 z-10 flex justify-center'>
            <div className='text-center max-w-[450px] text-white flex flex-col gap-[20px] md:gap-[40px]'>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'>Design your own</h1>  
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'><span className='text-purple-600'>Next</span>App</h1>
                </div>
            <div className='mx-auto bg-purple-600 h-[2px] w-[150px]'></div>  
            <div>
                <p className='text-sm md:text-xl text-gray-300 tracking-widest'>By Jonathan Zamudio</p>
                </div>
                <div>
                    <Button link="" text="Explore"/>
                </div>
            </div> 
        </div>
        <div className='hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center'>
            <div className='bg-purple-600 w-[1.5px] h-[250px]'></div>
            <Link legacyBehavior href="https://github.com/Jonsym">
                <a target="_blank"><AiFillGithub size={35} className='text-purple-600 hover:translate-x-1.5 duration-300'/>
                <div></div>
                </a>
            </Link>
            <Link legacyBehavior href="https://twitter.com/JonsymZ">
                <a target="_blank"><AiFillTwitterCircle size={35} className='text-purple-600 hover:translate-x-1.5 duration-300'/>
                <div></div>
                </a>
            </Link>
            <Link legacyBehavior href="https://www.linkedin.com/in/jonathan-zamudio-184027281/">
                <a target="_blank"><AiFillLinkedin size={35} className='text-purple-600 hover:translate-x-1.5 duration-300'/>
                <div></div>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Hero