import React from 'react'
import {motion} from 'framer-motion'
export default function Avatar({src,alt,className}){
    return(
        <motion.img
      src={src}
      alt="avatar"
      className={`rounded-full object-cover object-top border-2 border-white ${className}`}
      animate={{
        y: [0, -10, 0], 
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    )
}

     