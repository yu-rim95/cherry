import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,handleCityChange}) => {
    console.log("cities",cities)
  return (
    <div className='weather-box'>
        <Button variant="outline-success" onClick={()=>handleCityChange("current")}>Current Location</Button>{' '}
        {cities.map((item, index)=>(
            <Button variant='outline-secondary' key={index} onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}


export default WeatherButton
