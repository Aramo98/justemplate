import { FaSearch } from "react-icons/fa"
import {useState} from "react"


const api ={
    key:"78b78d90e1bdafa87eea4af5bb1833fb",
    base:"https://api.openweathermap.org/data/2.5/"
  }

function SearchBar (){
  
      
   const[search,setSearch] = useState("")

const [weather,setWeather] = useState("")
   const changeValues = (e)=>{
    setSearch(e.target.value)
   }

   const SearchWeather = ()=>{


        fetch(`${api.base}weather?q=${search}&appid=${api.key}`)
        .then((res) => res.json())
        .then((results)=>{
            setWeather(results)
           
      console.log(results);
        });
   }

return(
<div className="SearchBar">
    <form onSubmit={(e)=>{
        e.preventDefault()
    }}>
    <input type="text" placeholder="Search Your Country" value={search} onChange={changeValues}/>
    <button className="searchBtn" onClick={SearchWeather}>
        <FaSearch/>
        </button>
    </form>
  
    
    {typeof weather.main !== "undefined" ? (
        <> 
             <p className="message">{search  !== weather.name ? "Sorry" : weather.name }</p>
        <p className="weatherNum">{search  !== weather.name ? "---" :  Math.round(weather.main.temp ) - 273} <sup>o</sup>C</p> 

        </>
    ):(
        ""
    )}
</div>
)
}

export default SearchBar