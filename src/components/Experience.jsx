import React from 'react'
import options from '../data/dropdown.json'
import Dropdown from './Dropdown'

function Experience() {
    return (
      <div className="bg-[#000000]">
        <div>
        <div
          id="title-container"
          className="flex flex-row justify-between gap-[25%] py-[5%] px-[5.7%]"
        >
          <div id="sub-titles-one">
            <p className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
              experience
            </p>
            <p className="font-bold text-xs xs:text-xs sm:text-sm md:text-xl lg:text-2xl text-white">
              経験
            </p>
          </div>
          <div
            id="sub-titles-two"
            className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl"
          >
            <p className='text-white'>work experiences gained through years</p>
          </div>
        </div>

       <div className=''>
        {
            options.map((option) =>(
                <Dropdown key={option.id} expDropDown={option}/>
            ))
        }
       </div>
        

      </div>
    </div>
  )
}

export default Experience