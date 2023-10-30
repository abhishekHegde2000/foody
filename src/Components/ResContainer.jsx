import React from 'react'
import ResCard from './ResCard'
import resObj from '../utils/swiggyData'
import Search from './Search'
import { useState } from 'react'
import { resData } from '../utils/swiggyData'








const ResContainer = () => {

const [HotelData, setHotelData] = useState(resData);
const filterClick = () => {
    // Ensure that HotelData is an array before applying the filter
    if (Array.isArray(HotelData)) {
        const filteredData = HotelData.filter((restaurant) => restaurant.info.avgRating > 4);
        setHotelData(filteredData);
        console.log(filteredData);
    }
}


  return (

    <div>
            <div className='flex'>
                <Search />
                <button
                onClick={filterClick}
                className="cursor-pointer border border-black p-2 m-2 font-bold rounded">
                Top-rated
                </button>
            </div>
            <div className='flex flex-wrap justify-between'>
                {HotelData.map((restaurant,index) => {
                    return <ResCard key = {resData[index].info.id} resData={restaurant}/>
                })}
                {/* {resData.map((restaurant,index) => <ResCard key = {resData[index].info.id} resData={restaurant}/>)} */}
            </div>
    </div>

  )
}

export default ResContainer