import RestarentCart from "./RestarentCart"; // default import
import resList from "../utils/mockData";
import { useState , useEffect} from "react"; // name import
import Shimmer from "./Shimmer";
import { render } from "react-dom";

const Body = () => {
  
  const [ listofRestarents , setListOfRestarents] =  useState(resList)
  const [ serachText , setSerachText] = useState("")
  console.log(listofRestarents)
  console.log(serachText)

  //Empty dependency array ==> call once after render 
  // dependency array[searchText] => once after Initial render + everytime after render (my searchText changes)
  useEffect(()=>{
    // console.log("useEffect")

    // Api call
    // getRestarents()

  },[])

  async function getRestarents(){
    
    const data = await fetch(
      fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING")
    )

    let json = await data.json()

    setListOfRestarents(json?.data?.cards[2]?.data?.data?.cards)
  }

  console.log("render")

  //Conditional Rendering
  // if restarent is empty => shimmer UI
  // if restarent has data => actual data UI

    return (listofRestarents.length == 0) ? <Shimmer/> :  (
      <div className="body">
        <div className="search-bar">
          <input 

          type="text" 
          placeholder="Search" 
          value={serachText} 
          onChange={ e => {
            //update searchText Each click keybord
            setSerachText(e.target.value)
          }}
          />
          <button 
          onClick={()=>{

            // filter restarent using SearchText
            let filterList = listofRestarents.filter( res=>{
              return res?.data?.name?.toLowerCase()?.includes() == (serachText?.toLowerCase())
            })

            setListOfRestarents(filterList)

          }}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {

               // Logic for filter
               const filterList = listofRestarents.filter(
                res => res.data.avgRating > 4
               )
               setListOfRestarents(filterList)

            }}
          >
            Top Rated Restarent
          </button>
        </div>
        <div className="restarent-container">
          {listofRestarents.map(restarent => ( // card are generated bt mockData present in restList , if we changes resList thing we can change anything
              <RestarentCart key={restarent.data.id} resData={restarent} />
            )
          )}
        </div>
      </div>
    );
  };

export default Body