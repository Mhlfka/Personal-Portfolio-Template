import React from 'react'
import TheHero from '../assets/banner_image.png'
import BannerText from './BannerText'

function Hero() {
  return (
    <div>
        <div className='w-full h-[25%] bg-gradient-to-r from-black to-[#4E4D4D] flex justify-center'>
            <img src={TheHero} alt='TheHero' className='w-[36%] contrast-[110%] brightness-[40%] object-cover'/>
            <div className='absolute self-center '>
            <BannerText className="text-white font-myFont text-3xl sm:text-4xl md:text-5xl lg:text-9xl" text="ABDUGAFFAR"/>
            </div>
        </div>
    </div>
  )
}

export default Hero