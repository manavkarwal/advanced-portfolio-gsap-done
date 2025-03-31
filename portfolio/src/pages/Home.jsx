import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import bgImage from '../assets/web assets/manav.png';
import bgImage2 from '../assets/web assets/manav2.png';
import resume from '../assets/web assets/main resume.pdf';

const Home = () => {
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
    <div onMouseMove={(dets) => { mouseMoving(dets); }} id='page1' className='h-screen mb-10 w-screen md:p-7 bg-white'>

      <div id='page1-in' className=' h-full w-full md:rounded-4xl shadow-lg     bg-center bg-cover md:bg-cover md:bg-bottom  shadow-gray-600 ' style={{ backgroundImage: `url(${window.innerWidth < 768 ? bgImage2 : bgImage})` }} >



        <header className='h-[10%] rounded-4xl flex items-center justify-between px-7 '>
          <h1 className='font-[anzo3] text-white text-4xl  '>
            Manav Karwal
          </h1>
          <div className='text-white flex justify-between gap-4'>
            <a href="https://www.linkedin.com/in/manav-karwal/">
              <img className='h-8 hover:scale-103' src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" />
            </a>
            <a href="https://github.com/manavkarwal">
              <img className='h-8 hover:scale-103 bg-white rouded-lg' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            </a>
          </div>
        </header>

        <main id='tiltDiv' ref={tiltRef} className='h-[80%] flex items-center px-10 md:mt-0 mt-40  inset-96 mix-blend-difference '>
          <h1 className='text-white leading-11 font-[anzo1] text-5xl md:text-6xl'>I am <br></br><span className='font-extrabold text-6xl md:text-7xl leading-14 font-[anzo3]  '>FRONT-END DEV</span> </h1>
        </main>


        <footer className='-mt-50 md:-mt-10 h-[10%] flex flex-col md:items-start px-10  text-lg font-medium '>
        <a  className='bg-white font-extrabold hover:bg-gray-400 px-2 w-54 md:w-[18%] py-1 rounded-lg'
            href={resume}
            download="Manav_Karwal_Resume.pdf"
          >Download My Resume</a>
          <h2 className='md:text-white'>
            karwalmanav438@gmail.com
          </h2>

        </footer>

      </div>

    </div>
  )
}

export default Home
