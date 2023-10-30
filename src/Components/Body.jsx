import React, { useState } from 'react';
import ResContainer from './ResContainer';
import Search from './Search';
import resData from '../Components/ResContainer'; // Make sure this imports an array



const Body = () => {
  const [HotelData, setHotelData] = useState(resData);

  const filterClick = () => {
    // Ensure that HotelData is an array before applying the filter
    if (Array.isArray(HotelData)) {
      const filteredData = HotelData.filter((restaurant) => restaurant.info.avgRating > 4);
      setHotelData(filteredData);
      console.log(filteredData);
    }
  };

  return (
    <div>

      <ResContainer />
    </div>
  );
};

export default Body;
