"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView} from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About", 0.8)
  
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
    scroll-mt-28'

    initial = {{opacity:0, y: 100 }}
    animate = {{opacity:100, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-5">
                My name is{" "}
                <span className="  font-semibold">Anss Hameed</span>,
                I am an enthusiastic and dedicated student pursuing a Bachelor&apos;s degree in{" "}
                <span className="  font-semibold">
                  Computer Science
                </span>{" "}
                at the
                <span className=" font-semibold">
                  {" "}
                  University of Bristol
                </span>{" "}
                with a strong passion in Quantitative Finance and financial markets. 
              </p>
        <p className="mb-5">
        My academic and professional experiences have provided me with a robust foundation in full-stack development, technology consultancy, and sales. I am particularly passionate about applying my technical skills to solve complex challenges in dynamic commercial environments. Check out my Gitub to see my Quantitative Finance projects so far!
        </p>
        <p >
        Please contact me below if you have any queries or find out more about me on my LinkedIn!
        </p>

    </motion.section>
  )
}
