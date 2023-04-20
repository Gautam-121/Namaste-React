import {LOGO_URL} from "../utils/contant"
import {useState} from 'react'

const isLoogedUser = ()=>{
  //Check Person is Looged In
  const isLoggedIn =  true
  return isLoggedIn ? true : false
}

const Header = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(isLoogedUser())
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? 
        <button onClick={()=>{
          setIsLoggedIn(!isLoggedIn)
        }}>login</button> :
        <button onClick={()=>{
          setIsLoggedIn(!isLoggedIn)
        }}>logOut</button>}
      </div>
    );
  };

export default Header // default send so we can access throught that name