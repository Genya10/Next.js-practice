import Link from "next/link";

async function fetchData (id){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id);
    const result = await res.json();
    return result;
  }
 
 const Post = async ( {params: {id}})=>{
    const post = await fetchData(id);
   
     return (
         <div>
            <Link href="/">Main page</Link>
             <h2>{post.title}</h2>
             <strong>{post.body}</strong>
             <h2>Author ID:{post.id}</h2>
         </div>
     )
 }

export default Post;