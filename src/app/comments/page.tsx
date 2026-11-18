import {getAllComments} from "@/services/api.service";
import {Comment} from "@/components/comment/Comment";
import {Metadata} from "next";

export const generateMetadata=async ():Promise<Metadata>=>{
    return {title:'All Comments'}
}
const CommentsPage=async ()=>{
    const comments=await getAllComments()
    return(
        <div>{comments.map(comment=><Comment key={comment.id}{...comment}/>)}</div>
    )
}
export default CommentsPage;
