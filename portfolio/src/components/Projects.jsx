import React from 'react'
import ecomImage from '../assets/web assets/ecom.png'
import image1 from '../assets/web assets/disney.png'
import image2 from '../assets/web assets/weather.png'
import image3 from '../assets/web assets/video.png'
import image4 from '../assets/web assets/two good.png'
import image5 from '../assets/web assets/todo.png'
import image6 from '../assets/web assets/pass.png'
import image7 from '../assets/web assets/gsap web.png'

const Projects = () => {
    return (
        <div className=' p-2 grid grid-cols-1 md:h-[140vh] md:flex  md:flex-wrap justify-center items-center  gap-10  mx-8 mb-10 shadow-lg rounded-4xl shadow-gray-950'>
            <div className='md:h-[45%] md:w-[20%] px-3 bg-gray-100   shadow-md shadow-gray-850 rounded-2xl flex-col  items-center  justify-between  '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>E-commerce Clone</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={ecomImage} alt="E-commerce Project" />
               
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-_6xsw-5CJo5zcpjBF8rsgCwwLD5Gl1PEQ&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdOPGrhHK13DvB6p7XR8Qlw_LOfMbRuK5Bg&s" alt="#" />
                    <img className='h-10' src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://ecommanav.netlify.app/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/e-commerse"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>

                </div>
            </div>

            <div className='md:h-[45%] md:w-[20%] px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between  '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>Weather App</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image2} alt="E-commerce Project" />
               
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-_6xsw-5CJo5zcpjBF8rsgCwwLD5Gl1PEQ&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdOPGrhHK13DvB6p7XR8Qlw_LOfMbRuK5Bg&s" alt="#" />
                    <img className='h-10' src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://manavkarwal.github.io/weather_1/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/weather_1"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>

                </div>
            </div>

            <div className='md:h-[45%] md:w-[20%]  px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>TodoList App</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image5} alt="E-commerce Project" />
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-_6xsw-5CJo5zcpjBF8rsgCwwLD5Gl1PEQ&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdOPGrhHK13DvB6p7XR8Qlw_LOfMbRuK5Bg&s" alt="#" />
                    <img className='h-10' src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://manavkarwal.github.io/todo-list-1/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/todo-list-1"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>

                </div>

            </div>

            <div className='md:h-[45%] md:w-[20%]  px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between  '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>GSAP Animated Website</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image7} alt="E-commerce Project" />
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-10' src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://manavreactgsap.vercel.app/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/gsap-animated-website"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>
                </div>
            </div>

            <div className='md:h-[45%] md:w-[20%]  px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>Disney Clone</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image1} alt="E-commerce Project" />
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-10' src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGC0jDcT3Ns8NId2z7D6KC0xwZ-B0T1t1mQ&s" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://manav-disney-clone.netlify.app/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/hotstar_clone"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>
                </div>
            </div>

            <div className='md:h-[45%] md:w-[20%]  px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between  '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>Password Manager App</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image6} alt="E-commerce Project" />
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-10' src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s" alt="#" />
                    {/* <img  className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGC0jDcT3Ns8NId2z7D6KC0xwZ-B0T1t1mQ&s" alt="#" /> */}
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://manav-password-manager.netlify.app/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/pass-manager"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>
                </div>
            </div>

            <div className='md:h-[45%] md:w-[20%]  px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between  '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>GSAP animated Website</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image4} alt="E-commerce Project" />
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-10' src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://two-good-co-manav.netlify.app/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    <a target="_blank" href="https://github.com/manavkarwal/two-good-go-clone-gsap"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a>
                </div>
            </div>

            <div className='md:h-[45%] md:w-[20%]  px-3 bg-gray-100 shadow-md shadow-gray-850 rounded-2xl flex-col items-center justify-between  '>
            <h1 className=' shadow-md shadow-gray-750 rounded-2xl px-2 py-1 text-center font-[anzo2] '>Agency Portfolio</h1>
                <img className=' shadow-md shadow-gray-750  my-2 rounded-2xl w-[100%] object-cover h-[50%]' src={image3} alt="E-commerce Project" />
                <div className=' shadow-md  bg-white shadow-gray-750  my-2  items-center justify-between px-10 p-3 1 rounded-2xl flex '>
                    <img className='h-10' src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s" alt="#" />
                    <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s" alt="#" />
                </div>
                <div className='shadow-md shadow-gray-750  my-2   bg-white  items-center justify-end gap-5 px-5 py-3 1 rounded-2xl flex '>
                    <a target="_blank" href="https://meditz.netlify.app/"><img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQblusZN1j1JkklzUBnZ5V_fIwtCA1G7RAzFW0KGVE-LRiLWkX-7XDZNermi3FTOM7ttQ&usqp=CAU" alt="#" /></a>
                    {/* <a target="_blank" href="https://github.com/manavkarwal/portfolio"> <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s" alt="#" /></a> */}
                </div>
            </div>
        </div>

    )
}

export default Projects
