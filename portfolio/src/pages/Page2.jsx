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

// custom cursor
// const mainRef = useRef(null);
    // const cursorRef = useRef(null);
    // const imageRef = useRef(null);
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);


    // useGSAP(() => {
    //     gsap.to(cursorRef.current, {
    //         x: x,
    //         y: y,
    //         duration: 0.3,
    //         ease: "power2.out"
    //     })
    // }, [x, y])



    // const mainDetails = (dets) => {
    //     setX(dets.pageX)
    //     setY(dets.pageY)
    // }


    // const mouseEnter = (e) => {
    //     gsap.to(cursorRef.current, {
    //         scale: 3,
    //         duration: 0.3,
    //     })
    //     cursorRef.current.style.backgroundColor = "rgba(255, 255, 255)";
    //     cursorRef.current.classList.add("mix-blend-difference");
    // }

    // const mouseLeave = (e) => {
    //     gsap.to(cursorRef.current, {
    //         scale: 1,
    //         duration: 0.3,

    //     })

    // }
    {/* cursor ball */}
            {/* <div ref={cursorRef} className='h-[20px] z-10 p-1 w-[20px] text-[4px] bg-black  leading-none rounded-full fixed text-black text-center flex items-center justify-center   font-bold '></div> */}
            {/* ref={mainRef} */}
            {/* ref={imageRef} onMouseEnter={(e) => { mouseEnter(e) }} onMouseLeave={(e) => { mouseLeave(e) }}  // mainDetails(dets);  */}
