import React from 'react'
import { useState } from 'react'
import Alumni from '../../constants/alumni'
import arrow from '../../images/assets/AboutTeamArrow.png'

const TeamAlumni = () => {
  const [loadMore, setLoadMore] = useState(false)
  const handleLoadMore = () => {
    setLoadMore((prev) => !prev)
  }

  return (
    <>
      <div className={`w-full ${loadMore ? "h-full" : "max-md:h-[1100px] h-[370px] xl:h-[400px]"} flex items-center justify-around md:justify-between flex-wrap gap-7 relative overflow-hidden`}>
        {Alumni.map((item, index) => {
          return (
            <div key={index} className="w-[270px] lg:w-[300px] xl:w-[350px] h-[350px] lg:h-[400px]">
              <img className='rounded-xl object-fill mb-[10px]' src={item.Image} alt="memories" />
              <div className='text-center text-3xl font-bold'>{item.Name}</div>
              <div className='text-center text-xl'>{item.Role}</div>
            </div>
          )
        })}
      </div>
      <div onClick={handleLoadMore} className='relative mx-auto mt-2 mb-10 w-[40px] h-[40px] border-4 border-blue-600 rounded-full grid place-content-center cursor-pointer'>
        {loadMore ? <img className='rotate-180' src={arrow} alt="Down" /> : <img src={arrow} alt="Down" />}
      </div>
    </>
  )
}

export default TeamAlumni