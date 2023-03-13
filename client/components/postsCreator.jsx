export default function PostsCreator() {
    return (
        <div className="postBox">
           <form className="post">
              <input type="text" name="wherePost" placeholder="Where are you going?"/>
              <input type="text" name= "whenPost" placeholder="What time?"/>
              <button className="postButton">Post</button>
           </form>
        </div>
    )
}