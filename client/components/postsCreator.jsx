export default function PostsCreator() {
    return (
        <div className="postBox">
           <form>
              <input type="text" name="wherePost"/>
              <input type="text" name= "whenPost"/>
              <input type="button" name="postButton"/>
           </form>
        </div>
    )
}