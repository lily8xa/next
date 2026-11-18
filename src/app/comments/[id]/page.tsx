import {Props} from "@/components/userDetails/UserDetails";
import {Suspense} from "react";
import {CommentDetails} from "@/components/commentDetails/CommentDetails";


const CommentPage=({params}:Props)=>{
    return(
        <Suspense fallback={'Loading...'}>
            <CommentDetails params={params}/>
        </Suspense>
    )
}
export default CommentPage;
