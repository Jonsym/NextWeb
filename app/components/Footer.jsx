import React from 'react';
import Link from "next/link";
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/Ai';


const Footer = () => {
  return (
    <footer className='bg-purple-600 min-h-[450px] md:min-h-[250px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16'>
                <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
                    <span className='italic text-gray-950'>Next</span>
                    <span className='italix text-white'>Web</span>
                </div> 
                <div className='flex flex-col gap-8 tracking-wider text-gray-800 text-center'>
                    <Link className='hover:text-white' href="/">Home</Link>
                    <Link className='hover:text-white' href="#aplicacion">Apps</Link>
                    <Link className='hover:text-white' href="#categorie">Categories</Link>
                    <Link className='hover:text-white' href="/">Services</Link>
                </div>
                <div className='flex gap-x-5 items-center'>
                    <Link legacyBehavior href="https://github.com/Jonsym">
                        <a target="_blank"><AiFillGithub size={35} className='text-gray-700 hover:text-white hover:translate-y-1.5 duration-300'/>
                        <div></div>
                        </a>
                    </Link>
                    <Link legacyBehavior href="https://twitter.com/JonsymZ">
                        <a target="_blank"><AiFillTwitterCircle size={35} className='text-gray-700 hover:text-white hover:translate-y-1.5 duration-300'/>
                        <div></div>
                        </a>
                    </Link>
                    <Link legacyBehavior href="https://www.linkedin.com/in/jonathan-zamudio-184027281/">
                        <a target="_blank"><AiFillLinkedin size={35} className='text-gray-700 hover:text-white hover:translate-y-1.5 duration-300'/>
                        <div></div>
                        </a>
                    </Link>
                </div> 
            </div>

            <p className='text-white text-center text-sm pb-3'>Designed by Jonathan Zamudio</p>
        </div> 
    </footer>
  );
};

export default Footer