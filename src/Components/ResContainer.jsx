import React from 'react'
import ResCard from './ResCard'
import resObj from '../utils/swiggyData'



const resData = resObj?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

console.log(resData)
const ResContainer = () => {
//   return (
//     <div className='flex flex-wrap justify-between'>

//         <ResCard resData={resData[5]}/>
//         <ResCard resData={resData[1]}/>
//         <ResCard resData={resData[0]}/>
//         <ResCard resData={resData[4]}/>
//         <ResCard resData={resData[5]}/>
//         <ResCard resData={resData[1]}/>
//         <ResCard resData={resData[0]}/>
//         <ResCard resData={resData[4]}/>
        
//     </div>
//   )

  return (
    <div className='flex flex-wrap justify-between'>

        {resData.map((restaurant,index) => {
            return <ResCard key = {resData[index].info.id} resData={restaurant}/>
        })}
        
        {/* {resData.map((restaurant,index) => <ResCard key = {resData[index].info.id} resData={restaurant}/>)} */}

    </div>
  )
}

export default ResContainer