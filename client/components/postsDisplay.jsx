import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialPosts } from "../redux/postSlice";
import Post from "./post";
import "../styles/PostsDisplay.css" 


export default function() {
   // const [posts, setPosts] = useState([]);
   const dispatch = useDispatch();

   useEffect(() => {
      const asyncFunc = () => {
         fetch('/posts', { mode: "no-cors" })
            .then(res => res.json())
            .then((data) => {
               dispatch(setInitialPosts(data))
               // setPosts(data);
            })
            .catch((err) => console.log(err))

      };
      asyncFunc()

   }, [])
   const posts = useSelector((state) => state.post.posts);

   function listPosts(posts) {
      return posts.map((post, i) => {
         return <Post id={post._id} owner={post.owner} placeId={post.placeId} expirationTime={post.expirationTime}/>
      })
   }

   return (
      <div className='postDisplay'>
         <div className="heading">
            <h2>{`${useSelector(state => state.post.postTotal)} LunchRunners`}</h2>
         </div>
         <div className="postsContainer">
         {listPosts(posts)}
         </div>
      </div>
   )
}
