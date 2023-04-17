import {CDN_URL} from "../utils/contant"
 
const RestarentCart = (props) => {
    const { resData } = props;
  
    const { name, cuisines, costForTwo, avgRating, deliveryTime , cloudinaryImageId } = resData?.data; // Optional Chaining Operator
  
    return (
      <div className="res-card" style={{ backgroundColor: "01010101" }}>
        <img
          className="res-logo"
          alt="reslogo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{avgRating} starts</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestarentCart