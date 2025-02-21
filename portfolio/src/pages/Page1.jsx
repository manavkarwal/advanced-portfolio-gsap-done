import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


const Page1 = () => {
    const tiltRef = useRef(null);
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);

    const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 70);
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 10);
    }

    useGSAP(function () {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 5,
            ease: 'power4.out'
        })
    }, [xVal, yVal])

    return (
        <div id='page1' onMouseMove={(e) => mouseMoving(e)} className='h-screen w-screen relative p-7 bg-white'>
            <div id='page1-in' className='relative h-full w-full rounded-4xl shadow-lg bg-cover shadow-gray-600 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_618,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-black'>
                <div className='font-[anzo1] text-white pt-2 pl-5 text-5xl  '>
                    Meditz
                </div>
                <TiltText abc={tiltRef} />
                <Page1Bottom />
            </div>
        </div>
    )
}

export default Page1
