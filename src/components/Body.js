import RestarentCart from "./RestarentCart"; // default import
import resList from "../utils/mockData";
import { useState , useEffect} from "react"; // name import
import Shimmer from "./Shimmer";

const Body = () => {

  const [filterRestarents , setFilterRestarents] = useState([])
  const [allRestarents, setAllRestarents] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Empty dependency array ==> once afer render
  // dependency array [serchText] ==> once after initial render + everytime after render (my searchText Changes)
  useEffect(()=>{
    console.log("call this dependency useEffect")
    //Api Call
    getRestarents()
  },[])

  async function getRestarents(){

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
      )
    const json = await data.json()
    console.log(json)
    //Optional Chaining
    setAllRestarents(json?.data?.cards[2]?.data?.data.cards)
    setFilterRestarents(json?.data?.cards[2]?.data?.data.cards)
  }

  const topRatedRestarent = () => {
    const filterList = allRestarents.filter((res) => res.data.avgRating > 4);
    setFilterRestarents(filterList);
  };

  const searchRestarent = (e) => {
    setSearchText(e.target.value);
  };

  const changeResListAccToSearch = () => {
    // 8 restarent list ==> filteres rest with restName
    let serachData = allRestarents.filter((res) => {
      return res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });

    setFilterRestarents(serachData);
  };

  console.log("render")

  //Conditional Rendering --> You can show eighter Shimmer Ui or Normal Ul
  // if listRestarent is empty  ==> Shimmer Ui
  // if restarent has data ==> actual daat Ui

  // not render component (Early return)
  if(!allRestarents) return null;

  if(filterRestarents.length == 0){
    return <h1>No Restarent Mathches Your Filter!!</h1>
  }

  return allRestarents?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={searchRestarent}
          placeholder="Search"
        />
        <button onClick={changeResListAccToSearch}>Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={topRatedRestarent}>
          Top Rated Restarent
        </button>
      </div>
      <div className="restarent-container">
        {/* { "Yoy have to write logic for No restarent found here"} */}
        {filterRestarents.map((restarent) => (
          <RestarentCart key={restarent.data.id} resData={restarent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
