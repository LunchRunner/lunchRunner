import PostsCreator from "../components/postsCreator"
export default function Page(props) {
    return (
        <div className="posts-container"> 
            <h1>Who's feeling hungry?</h1>
            <PostsCreator />
        </div>
    )
}