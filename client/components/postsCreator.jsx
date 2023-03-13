import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { incrementPostTotal } from "../redux/postSlice";

export default function PostsCreator() {
   const dispatch = useDispatch();
   const total = useSelector((state) => state.post.postTotal);
   const [whereInput, setWhereInput] = useState('');
   const [whenInput, setWhenInput] = useState('');
   useEffect(()=> {

   },[])

   function postButtonClick() {
      const testName = 'no name yet';
      dispatch(incrementPostTotal())

      // Posts.create({});
      // const requestOptions = {method: "POST", body: {placeId: }}
      fetch('http://localhost:3000/posts', requestOptions)

      setWhereInput('');
      setWhenInput('');
   }

    return (
        <div className="postBox">
         <div>postHere</div>
         <div>{total}</div>

           <form className="post">
              <input value={whereInput} type="text" onChange={(e) => {
               setWhereInput(e.target.value);
            }} name="wherePost" placeholder="Where are you going?"/>
              <input value={whenInput} type="text" onChange={(e)=> {
               setWhenInput(e.target.value)
            }} name= "whenPost" placeholder="What time?"/>
              <button className="postButton" onClick = {(e) => {
               e.preventDefault()
               postButtonClick();
            }}>Post</button>
           </form>
        </div>
    )
}
