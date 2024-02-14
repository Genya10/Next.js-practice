import Link from "next/link";

const Post =({post})=>{

    return (
        <div className="post">
            <Link href="/">Main page</Link>
             <h2>{post.title}</h2>
             <p>{post.body}</p>
             <h2>Author ID:{post.id}</h2>
        </div>
    )
}
export default Post;