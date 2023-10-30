import React from 'react'
import {basePath} from '../utils/constants'




const ResCard = ({resData}) => {


    // Destructure the properties from resData
    const { name, locality, avgRating, costForTwo, cloudinaryImageId , id } = resData?.info;
  
    

    
  return (
    <div className=' border m-2 p-2 border-black inline-block w-40 bg-gray-100'>
        <img className= "w-40 h-30" src={basePath + cloudinaryImageId} alt="image not available" />
        <div>
            <h1>{name}</h1>
            <p>{locality}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
        </div>
    </div>
  )
}

export default ResCard