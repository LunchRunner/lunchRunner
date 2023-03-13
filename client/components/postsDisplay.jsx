import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialPosts } from "../redux/postSlice";


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
         return (
            <div key={`unique${i}`}>
               <span>
                  {post.owner}
               </span>
               <span> is going to </span>
               <span>
                  {post.placeId}
               </span>
               <span> in </span>
               <span>
                  {post.expirationTime}
               </span>
            </div>
         )
      })
   }

   return (
      <div>
         <h2>{`${useSelector(state => state.post.postTotal)} LunchRunners`}</h2>
         <ul>
            {listPosts(posts)}
         </ul>
      </div>
   )
}
