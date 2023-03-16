import PostsCreator from "../components/postsCreator"
import PostsDisplay from "../components/postsDisplay"
export default function Page(props) {
    return (
        <div className="posts-container"> 
            <h1>Who's feeling hungry?</h1>
            <PostsCreator />
            <PostsDisplay />
        </div>
    )
}
