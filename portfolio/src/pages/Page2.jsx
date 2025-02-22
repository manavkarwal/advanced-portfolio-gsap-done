import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from(".rotateText", {
            transform: 'rotateX(-90deg)',
            opacity: 0,
            stagger: 1,
            scrollTrigger: {  // Changed from ScrollTrigger to scrollTrigger
                trigger: '.section2',
                
                start: "top 59%",
                end: "bottom 79%",
                scrub:2,
            }
        })
    })

    return (
        <div className='section2'>
            <div className='rotateText   text text-center mt-30'>
                <h1 className=' leading-100 text-[70vh] font-[anzo1]'>IMPACTFUL</h1>
            </div>
            <div className='text rotateText  text-center '>
                <h1 className=' leading-100 text-[70vh] font-[anzo1]'>DESIGN</h1>
            </div>
            <div className='text rotateText  text-center '>
                <h1 className=' leading-100 text-[70vh] font-[anzo1]'>IS THE</h1>
            </div>
            <div className='text rotateText  text-center '>
                <h1 className=' leading-100 text-[70vh] font-[anzo1]'>DESIGN</h1>
            </div>
            <div className='text rotateText  text-center '>
                <h1 className=' leading-100 text-[70vh] font-[anzo1]'>THAT</h1>
            </div>
            <div className='text  rotateText  text-center '>
                <h1 className=' leading-100 text-[70vh] font-[anzo1]'>WORKS</h1>
            </div>

        </div>
    )
}

export default Page2
