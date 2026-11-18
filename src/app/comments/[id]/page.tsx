import {Props} from "@/components/userDetails/UserDetails";
import {Suspense} from "react";
import {CommentDetails} from "@/components/commentDetails/CommentDetails";
import {Metadata} from "next";
export const generateMetadata=async ({params}:Props):Promise<Metadata>=>{
    const {id}=await params;
    return {title:'About Comment '+id}
}

const CommentPage=({params}:Props)=>{
    return(
        <Suspense fallback={'Loading...'}>
            <CommentDetails params={params}/>
        </Suspense>
    )
}
export default CommentPage;
