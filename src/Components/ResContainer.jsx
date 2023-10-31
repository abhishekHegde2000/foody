import React from 'react'
import ResCard from './ResCard'
import resObj from '../utils/swiggyData'
import Search from './Search'
import { useState , useEffect } from 'react'
import { resData } from '../utils/swiggyData'
import Shimmer from './Shimmer'


const ResContainer = () => {

const [HotelData, setHotelData] = useState([]);

const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const dataJson = await data.json();
    
    setHotelData(dataJson.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

    useEffect(() => {
        fetchdata();
    }
    ,[])


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
        {HotelData.length === 0 ? (
            <Shimmer />
        ) : (
            <div>
                <div className='flex'>
                    <Search />
                    <button
                        onClick={filterClick}
                        className="cursor-pointer border border-black p-2 m-2 font-bold rounded"
                    >
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
        )}
    </div>
);
    

}

export default ResContainer