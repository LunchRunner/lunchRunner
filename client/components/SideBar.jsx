import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import User from '../../server/models/user'
import { changeView } from "../redux/postSlice";
import "../styles/SideBar.css" 
import Home from "./map";



export default function SideBar() {
  let view = useSelector((state) => state.post.view);
  let viewState
  const dispatch = useDispatch()

  //changes styling of button depending on view  
  function handleClick(v) {
    // if(isLoggedIn) ;
    // else{
      dispatch(changeView(v))
    // }
    
  }

// will need to get data from state about whether the user is logged in or not
    //render Link buttons depending on the login status of the client

    //fix styling for proportional sidebar/outlet responsive sizing 
    //want sidebar to be a fixed size minimum
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  function renderMap() { 
    if (isLoggedIn) {
      return (
        <Home />
      )
    }
   
  }

  function createSideBarButtons() {
    if (!isLoggedIn) {
      return (
      <div className='menuButtonContainer'>
         <Link to={"login"}>
        <button onClick={() => handleClick('login')} disabled={view == 'login'}>Login</button>
         </Link>
        <Link to={"signup"}>
          <button onClick={() => handleClick('signup')} disabled={view == 'signup'}>Sign Up</button>
        </Link>
      </div>
      )
    } else {
      return (
        <div className='menuButtonContainer'>
        <Link to={"listview"}>
        <button onClick={() => handleClick('viewruns')} disabled={view == 'viewruns'}>View Runs</button>
        </Link>
        <Link to={"createrun"}>
        <button onClick={() => handleClick('createrun')} disabled={view == 'createrun'}>Create New Run</button>
         </Link>
      </div>
      )
    }
  }

  let test = ''

  function handleChange(s) {
    test += s
  }
  

  return (
    <div className = "sidebar">
      <div className='imgContainer'>
        <h1>LunchRunners 2.0</h1>
      </div>
        {createSideBarButtons()}
        <div className='map'>
          {renderMap()}
        </div>
      </div>
  )
}