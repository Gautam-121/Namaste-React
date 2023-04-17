import RestarentCart from "./RestarentCart"; // default import
import resList from "../utils/mockData";
import { useState } from "react"; // name import

const Body = () => {

  //Make SuperPowerFull variable -- Local State Variable
  // const [listofRestarents ,setListOfRestarents] = useState([
  //   {data : { 
  //     id: "180402",
  //     name: "Dominos",
  //     cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
  //     cuisines: ["Biryani"],
  //     costForTwo: 25000,
  //     deliveryTime: 18,
  //     avgRating: "4.1",
  //   }},
  //   {data : { 
  //     id: "180401",
  //     name: "KFC",
  //     cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
  //     cuisines: ["Biryani"],
  //     costForTwo: 25000,
  //     deliveryTime: 18,
  //     avgRating: "3.0",
  //   }},
  //   {data : { 
  //     id: "18041",
  //     name: "Maggie",
  //     cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
  //     cuisines: ["Biryani"],
  //     costForTwo: 25000,
  //     deliveryTime: 18,
  //     avgRating: "4.2",
  //   }}
  // ]) // call the State variable it will give state variable and how we receive

  const [ listofRestarents , setListOfRestarents] =  useState(resList)
  // const arr = useState(resList)

  // const listofRestarents = arr[0]
  // const setListofRestarents = arr[1]
  //Normal Js variable
  //let listofRestarents = []

  //Normal Js variable
  let listofRestarentsJs = [
   {data : { 
      id: "180402",
      name: "Dominos",
      cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
      cuisines: ["Biryani"],
      costForTwo: 25000,
      deliveryTime: 18,
      avgRating: "4.1",
    }},
    {data : { 
      id: "180401",
      name: "KFC",
      cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
      cuisines: ["Biryani"],
      costForTwo: 25000,
      deliveryTime: 18,
      avgRating: "3.0",
    }},
    {data : { 
      id: "18041",
      name: "Maggie",
      cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
      cuisines: ["Biryani"],
      costForTwo: 25000,
      deliveryTime: 18,
      avgRating: "4.2",
    }}
  ]
    return (
      <div className="body">
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
          {listofRestarents.map(
            (
              restarent // card are generated bt mockData present in restList , if we changes resList thing we can change anything
            ) => (
              <RestarentCart key={restarent.data.id} resData={restarent} />
            )
          )}
        </div>
      </div>
    );
  };

export default Body