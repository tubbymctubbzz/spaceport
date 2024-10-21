"use client"

import React from 'react'
import { motion, useScroll } from "framer-motion"

const ProgressBar = () => {
    const { scrollYProgress } = useScroll()
  return (
    <motion.div 
    className='fixed top-0 left-0 right-0 h-[30px] bg-[#2A0E61] origin[0%] z-100'
     style={{ scaleX: scrollYProgress }}
    >
    </motion.div>
  )
}

export default ProgressBar