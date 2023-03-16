import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { setInitialPosts } from "../redux/postSlice";
import "../styles/post.css"
// import "../images"

export default function(props) {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const time = props.expirationTime;

    const date = new Date(time)

    const month = monthNames[date.getMonth()]
    const day = date.getDate()
    console.log(month, day)
    

    function handleClick(e) {
        //create the body of our post request
        const body = { username, _id: e.target.parentElement.id }
    
        const requestOptions = {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
        
        fetch('/posts/addRunner', requestOptions)
          .then(res => res.json())
          .then((data) => {
            console.log(data)
            dispatch(setInitialPosts(data))
          })
          .then(()=>{window.location.reload})
          .catch((err) => console.log(err))
      }

    return (
        <div className = "postTile" id={`${props.id}`}>
            {/* <img className = "image" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/> */}
            {/* <div className = "runInfo"> */}
            <div className="timeInfo">
                <p>{`${month} ${day}`}</p>
                <p>12:30PM</p>
            </div>
                <h1 className = "restaurantText">
                    {props.placeId}
                </h1>
                <p className = "postInfoText">
                    {props.expirationTime}
                </p>
                <p className = "postInfoText">
                    {props.owner}
                </p>
                <p className = "postInfoText">
                    joiners: {props.joiners}
                </p>
            {/* </div> */}
           
            <button className = "joinButton"
            onClick={(e) => handleClick(e)}
            >Join</button>
        </div>
    );
}
