import React from 'react'
import ResCard from './ResCard'
import resObj from '../utils/swiggyData'



const resData = resObj?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
console.log(resData)

const ResContainer = () => {
  return (
    <div className='flex flex-wrap justify-between'>
        <ResCard resName = {resData[4].info.name}
        location = "bengaluru" 
        star = "5" 
        cost = {100} />

        
    </div>
  )
}

export default ResContainer