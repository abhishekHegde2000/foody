import React from 'react'




const ResCard = ({resName,location,star,cost}) => {


    
  return (
    <div className=' border m-2 p-2 border-black inline-block'>
        <img className= "w-40 h-30" src="https://imgs.search.brave.com/Co-4X7EoIvPnIe2At1ahDMsPKnCxKFj0VvQSABP5GQU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU3/Mjk3MDMyL3Bob3Rv/L21hc2FsYS1kb3Nh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0wX3J1SlcwcnpR/dk5tczNna0hyUk1L/bnh6bmg2MVRHRFFT/eExpU20tM0c0PQ" alt="masala dosa" />
        <div>
            <h1>{resName}</h1>
            <p>{location}</p>
            <p>{star} stars</p>
            <p>{cost}</p>
            
        </div>
    </div>
  )
}

export default ResCard