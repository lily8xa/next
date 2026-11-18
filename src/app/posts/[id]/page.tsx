import {Props} from "@/components/userDetails/UserDetails";
import {Suspense} from "react";
import {PostDetails} from "@/components/postDetails/PostDetails";
import {Metadata} from "next";

export const generateMetadata=async ({params}:Props):Promise<Metadata>=>{
    const {id}=await params;
    return {title:'About Post '+id}
}
const PostPage=({params}:Props)=>{
    return(
        <Suspense fallback={'Loading...'}>
            <PostDetails params={params}/>
        </Suspense>
    )
}
export default PostPage;
