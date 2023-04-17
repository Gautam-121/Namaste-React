import RestarentCart from "./RestarentCart";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restarent-container">
          {
            resList.map(restarent => (
              <RestarentCart key = {restarent.data.id} resData = {restarent}/>
            ))
          }
        </div>
      </div>
    );
  };

export default Body