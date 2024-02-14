import Post from "@/app/components/Post";

async function fetchData (id){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id);
    const result = res.json();
    return result;
  }
 
 const PostPage = async ( {params: {id}})=>{
    const post = await fetchData(id);
   
     return (
         <div>
          <Post post={post}/>
         </div>
     )
 }

export default PostPage;