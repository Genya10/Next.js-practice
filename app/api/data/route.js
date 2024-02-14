export async function GET(request){
    const data ={
        name:"Jenya",
        age:39,
        work:"Frontend deleloper"
    }
    return new Response(JSON.stringify(data));
}
