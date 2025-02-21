import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv'  ref={props.abc} className='mt-40 ml-10 '>
      <h1 className='text-white font-[anzo3]  text-7xl'>I am <span className='font-extrabold text-8xl font-[anzo2] inset-0  mix-blend-exclusion'>FREELANCER</span> </h1>
      <h1 className='text-3xl leading-1 font-[anzo2] text-white'>To Hire</h1>

    </div>
  )
}

export default TiltText
