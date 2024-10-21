import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
      <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
          <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
              <a href="/" 
              className='h-auto w-auto flex flex-row items-center'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                  <Image
                      src={'/avatar.png'}
                      alt={'logo'}
                      width={70}
                      height={70}
                      className='cursor-pointer hover:animate-pulse'
                  />

                    <span className='font-bold ml[10px] hidden md:block text-gray-300'>
                      Harvey
                    </span>
              </a>

              <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                  <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 font-bold'>
                      <a href="#about" className='cursor-pointer hover:animate-pulse hover:underline hover:text-purple-500'>About Me</a>
                      <a href="#skills" className='cursor-pointer hover:animate-pulse hover:underline hover:text-purple-500'>Skills</a>
                      <a href="#projects" className='cursor-pointer hover:animate-pulse hover:underline hover:text-purple-500'>Projects</a>
                      <a download href="./CV.pdf">Resume</a>
                  </div>
              </div>

              <div className='flex flex-row gap-5'>
                  {Socials.map((social) => (
                      <Image
                          src={social.src}
                          alt={social.name}
                          key={social.name}
                          width={24}
                          height={24}
                          className='hover:cursor-pointer hover:animate-pulse fill-current'
                          onClick={() => window.open(social.url, '_blank')}
                      />
                  ))}
              </div>
          </div>
    </div>
  )
}

export default Navbar