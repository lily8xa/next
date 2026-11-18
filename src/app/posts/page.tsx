import {getAllPosts} from "@/services/api.service";
import {Post} from "@/components/post/Post";
import {Metadata} from "next";

export const generateMetadata=async ():Promise<Metadata>=>{
    return {title:'All Posts'}
}
const PostsPage=async ()=>{
    const posts=await getAllPosts()
    return(
        <div>{posts.map(post=><Post key={post.id}{...post}/>)}</div>
    )
}
export default PostsPage;
