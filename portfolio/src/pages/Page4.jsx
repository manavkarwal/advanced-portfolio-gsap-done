import React from 'react'

const Page4 = () => {
    return (
        <div className='h-screen p-10 bg-white'>
            <div className='h-full w-full rounded-4xl overflow-hidden bg-black relative'>
            <h1 className='text-white absolute top-36 left-16 inset-0 mix-blend-difference text-[250px] z-10 font-[anzo3]'>ABOUT</h1>
                <video autoPlay
                    muted
                    loop
                    playsInline className='right-0  rounded-4xl absolute  h-full' src="/src/assets/web assets/file (21).mp4"></video>
                   
            </div>
        </div>
    )
}

export default Page4
