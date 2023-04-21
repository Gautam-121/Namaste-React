import {LOGO_URL} from "../utils/contant"
import {useState} from 'react'

const isLoogedInUser = ()=>{
  // Api call to check user Logged In 
  return false
}

const Header = () => {

  const [ isLoogedIn , setIsLoggedIn] = useState(isLoogedInUser())

  const changeToLogIn = ()=>{
    setIsLoggedIn(!isLoogedIn)
  }

  const changeToLogOut = ()=>{
    setIsLoggedIn(!isLoogedIn)
  }

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
        {
          // Any Javascript Expression Work Here and Not Statement
          // let a = 10 // one statement
          // console.log(a) // another statement
          // ((a=10),console.log(a))

          (isLoogedIn) ? <button onClick={changeToLogIn}>LogOut</button> : <button onClick={changeToLogOut}>Login</button>
        }
      </div>
    );
  };

export default Header // default send so we can access throught that name