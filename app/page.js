import Link from "next/link";

async function fetchData (){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = res.json();
  return result
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <div >
      <h1>Main page</h1>
      <div>{posts.map((post)=>{
       return <div key={post.id} className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/post/` + post.id}>Details</Link>
        </div> ;
     })}</div>
    </div>
  );
}
