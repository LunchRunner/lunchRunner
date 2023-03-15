import { Link } from 'react-router-dom'
import User from '../../server/models/user'
import "../styles/SideBar.css" 

export default function SideBar() {
// will need to get data from state about whether the user is logged in or not
    //render Link buttons depending on the login status of the client

    //fix styling for proportional sidebar/outlet responsive sizing 
    //want sidebar to be a fixed size minimum

  function createSideBarButtons() {
    if (false) {
      return (
      <div className='menuButtonContainer'>
        <Link to={"signup"}>
          <button>Sign Up</button>
        </Link>
        <Link to={"login"}>
          <button>Login</button>
         </Link>
      </div>
      )
    } else {
      return (
      <div className='menuButtonContainer'>
        <Link to={"listview"}>
          <button>View Runs</button>
        </Link>
        <Link to={"createrun"}>
          <button>Create New Run</button>
         </Link>
      </div>
      )
    }
  }

  return (
    <div className = "sidebar">
      <div className='imgContainer'>
        <h1>LunchRunners</h1>
      </div>
        {createSideBarButtons()}
      </div>
  )
}