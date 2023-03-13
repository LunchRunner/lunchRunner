import { process } from "ipaddr.js";
import { useEffect, useState } from "react";


const dummyData = [{
   who: 'test',
   where: 'chipotle',
   when: '10 mins',
},
{
   who: 'test2',
   where: 'dumplings',
   when: '15 mins'
}];
export default function() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      //fetch from database posts 
      // const data = fetch('http://localhost:3000/posts')
      // console.log(data)
   }, [])

   function listPosts(posts) {
      return dummyData.map((post, i) => {
         return (
            <li key={`unique${i}`}>
               {post.username}
            </li>
         )
      })
   }

   return (
      <div>
         <h2>Lunchrunner Postings</h2>
         <ul>
            {listPosts(posts)}
         </ul>
      </div>
   )
}
