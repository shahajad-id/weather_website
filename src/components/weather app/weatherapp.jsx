//rafc
import React from "react";
import './weatherapp.css';
import drizzle_icon from '../assets/drizzle.png'
import cloud_icon from '../assets/cloud.png'
import humidity_icon from '../assets/humidity.png'
import snow_icon from '../assets/snow.png'
import rain_icon from '../assets/rain.png'
import wind_icon from '../assets/wind.png'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'


const Weatherapp=()=>{
    let key='75ed9b545ebe56ed8445ce22419dbd50';

    const search=async ()=>{
        const city=document.getElementsByClassName('cityinput');
        if(city[0].value===""){
            return 0;
        }
        const url=`https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${city[0].value}&units=Metric`;
        let response=await fetch(url);
        let data=await response.json();
        const humidity=document.getElementsByClassName("humidity-percentange");
        const wind=document.getElementsByClassName("windspeed");
        const temp=document.getElementsByClassName("temp");
        const location=document.getElementsByClassName("location");
        humidity[0].innerHTML=data.main.humidity+" %";
        temp[0].innerHTML=data.main.temp+"  °C";
        wind[0].innerHTML=data.wind.speed+" km/h";
        location[0].innerHTML=data.name;
    }
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityinput" placeholder="enter city name"/>
                  <div className="search-icon" onClick={()=>{search()}}>
                      <img src={search_icon} alt="" />
                  </div>
            </div>
            <div className="image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="temp">
                25deg
            </div>
            <div className="location">
                delhi
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} className="icon" alt="" />
                    <div className="data">
                        <div className="humidity-percentange">65%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} className="icon" alt="" />
                    <div className="data">
                        <div className="windspeed">64km/h</div>
                        <div className="text">wind speed</div>
                    </div>
                </div>
            </div>
                  
        </div>
    )
}

export default Weatherapp

