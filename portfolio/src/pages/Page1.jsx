import React from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const page1 = () => {
    return (
        
        <div className='h-screen w-screen p-7 bg-white'>
            
            <div className='h-full w-full rounded-4xl shadow-lg bg-cover shadow-gray-600 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_618,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-black'>
            <div className='font-[anzo1] text-white pt-2 pl-5 text-5xl  '>
                Meditz
            </div>
            <TiltText/>
            <Page1Bottom/>
            </div>
           

          
        </div>
    )
}

export default page1
