import { Link } from 'react-router-dom'
import "../styles/SideBar.css" 

export default function SideBar() {
// will need to get data from state about whether the user is logged in or not
    //render Link buttons depending on the login status of the client

    //fix styling for proportional sidebar/outlet responsive sizing 
    //want sidebar to be a fixed size minimum
  return (
    <div className = "sidebar">
      <div className='imgContainer'>
        <h1>LunchRunners</h1>
      </div>
      <div className='menuButtonContainer'>
        <Link to={"signup"}>
          <button>Sign Up</button>
        </Link>
        <Link to={"login"}>
          <button>Login</button>
         </Link>
      </div>
      </div>
  )
}