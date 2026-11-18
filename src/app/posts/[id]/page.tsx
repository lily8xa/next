import {Props} from "@/components/userDetails/UserDetails";
import {Suspense} from "react";
import {PostDetails} from "@/components/postDetails/PostDetails";

const PostPage=({params}:Props)=>{
    return(
        <Suspense fallback={'Loading...'}>
            <PostDetails params={params}/>
        </Suspense>
    )
}
export default PostPage;
