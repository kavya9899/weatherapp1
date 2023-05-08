
import axios from "axios";
const API_KEY="42409324a6d99da101349a03a4a580ac"
const URL="https://api.openweathermap.org/data/2.5/weather"


const FetchWeather=async(query)=>{
     let {data}= await axios.get(URL,{
         params:{
            q:query, 
            units:"metric",
            APPID:API_KEY
         }
      })
      return data
}
export default FetchWeather;