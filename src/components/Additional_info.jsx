import React from 'react'
import './Additional.css'

const Additional_info = ({windy, humidity, pressure}) => {
  return (
    <div>


        <hr/>
         <br/>     
              <p style={{fontFamily: 'Serif'}}>Additional Info </p>
              <br/>
              <div className="additionalinfodetails">
                <p className="childelement" > Pressure  <br/>{pressure} </p>
                
                <p className="childelement"> Humidity <br/> {humidity}%</p> 
                
                <p className="childelement"> Windy <br/>{windy} km/hr </p>
                
              </div>

        <br/>
        <hr/>
    </div>
  )
}

export default Additional_info