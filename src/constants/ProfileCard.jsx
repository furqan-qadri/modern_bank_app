import React from 'react'

function ProfileCard(props) {
  return (
    <div className={`min-w-[250px] p-10 ${props.hello}`}>
        <div className='flex flex-col rounded-xl bg-slate-300 gap-5 p-9 hover:border hover:scale-105 red-blue-gradient text-white min-w-[250px]' style={{ transitionDuration: '0.15s' }}
    >

        {/* <div className='text-2xl text-white'></div> */}
        <div className='flex justify-center'>
            <img className=' top-1 h-32 w-32 rounded-full  bg-white'  src=
            {props.image ? props.image : "/furqan_profile.jpeg"}
            // "/furqan_profile.jpeg"
             alt="profile-picture" />
        </div>
        <div className='flex justify-center items-center text-2xl'>{props.name} </div>

        <div className='flex flex-col gap-2 mb-2 mt-[-8px]'>
            <div className='flex gap-2 justify-center'>
                <div className=''>{props.age} <span>,</span></div>
                <div>{props.job}</div>
            </div>
            <div className='flex justify-center items-center gap-2'>{props.city}</div>
        </div>
      
        <div className='flex justify-between'>

        <a className='h-12 w-12 rounded-2xl hover:scale-110' href="https://www.facebook.com/furqan.qadri.5076/">
            <img src="/facebook.png" alt="facebook" />
        </a>

        <a className='h-12 w-12 rounded-2xl hover:scale-110' href="https://www.instagram.com/furqanqadri_">
            <img src="/instagram.png" alt="facebook" />
        </a>

        <a className='h-12 w-12 rounded-2xl hover:scale-110' href="https://www.linkedin.com/in/furqan-qadri/">
            <div className='h-12 w-12'><img src="/linkedin.webp" alt="facebook" className='w-full h-full' /></div>
            
        </a>

        </div>


    </div>
    </div>
  
  )
}

export default ProfileCard