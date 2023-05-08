import FetchWeather from "./FetchWeather";
import { useState } from "react";
import moment from 'moment';
import "./App.css"
function App(){
  const[query,setQuery]=useState("")
  const[weather,setWeather]=useState({})
  const change=(e)=>{
        setQuery(e.target.value)
  }
  const search=async(e)=>{
    if(e.code==="Enter"){
       let data=  await FetchWeather(query)
       setWeather(data)
    }
  }
  return(
    <div className="main">
      <h2 style={{marginTop:"2%",textAlign:"center",color:"purple"}}>Weather App</h2>
      <div class="input-group mb-3" style={{marginTop:"2%"}}>
       <span class="input-group-text" id="inputGroup-sizing-default">Search Your City</span>
       <input type="text" value={query} onKeyPress={search}onChange={change} class="form-control"/>
       </div>
       <div className="card text-bg-dark mb-3" style={{maxWidth:"18rem",textAlign:"center"}}>
  <div className="card-header">Deatils</div>
  <div className="card-body">
    {weather.main && 
     <div className="weather_data">
      <div id="day">
      Day : {moment().format('dddd')}
      </div> 
      <div id="date">
      Date : {moment().format('LL')}
      </div> 
      <div id="city">
       City : {weather.name} ,<span> Country : {weather.sys.country}</span>
      </div>
      <div id="temp">
        Temperature : {Math.round(weather.main.temp)}<span>&deg;C</span>
      </div>
      <div id="rise">
        Sunrise : {weather.sys.sunrise}
      </div>
      <div id="set">
        Sunset : {weather.sys.sunset}
      </div> 
      <div id="set">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
        Description : {weather.weather[0].description}
      </div> 
      <div id="humidity">
      Humidity : {weather.main.humidity}
      </div>  
     </div>
}
  </div>
</div>
    </div>
  )
}

export default App;